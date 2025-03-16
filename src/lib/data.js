import { neon } from '@neondatabase/serverless';
import { cache } from 'react';

// Initialize neon client
const sql = neon(process.env.DATABASE_URL);

// Create a cached version of getContentForSlug to avoid redundant requests
export const getContentForSlug = cache(async (path) => {
  try {
    // First, find the matching URL pattern for this path
    const patterns = await sql`
      SELECT id, pattern, template_name 
      FROM url_patterns 
      ORDER BY LENGTH(pattern) DESC
    `;
    
    // Find best matching pattern (more specific patterns first)
    let matchedPatternId = null;
    let templateName = null;
    
    for (const pattern of patterns) {
      // Convert DB pattern like "/main-module/projects/*" to regex
      const regexPattern = pattern.pattern
        .replace(/\*/g, '.*')  // Convert * to regex .*
        .replace(/\//g, '\\/'); // Escape slashes
      
      const regex = new RegExp(`^${regexPattern}$`);
      
      if (regex.test(path)) {
        matchedPatternId = pattern.id;
        templateName = pattern.template_name;
        break;
      }
    }
    
    if (!matchedPatternId) {
      return null; // No matching pattern found
    }
    
    // Get the content block for this pattern
    const [contentBlock] = await sql`
      SELECT data FROM content_blocks WHERE url_pattern_id = ${matchedPatternId}
    `;
    
    if (!contentBlock) {
      return null; // No content found
    }
    
    // Get the template details
    const [template] = await sql`
      SELECT * FROM templates WHERE name = ${templateName}
    `;
    
    if (!template) {
      return null; // No template found
    }
    
    return {
      template,
      content: contentBlock.data
    };
    
  } catch (error) {
    console.error('Error fetching content:', error);
    return null;
  }
});