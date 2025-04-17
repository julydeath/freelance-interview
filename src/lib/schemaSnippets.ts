// lib/templates/sectionSchemas.ts

export const schemaSnippets: Record<string, string> = {
  mainModuleHeroData: `{
      "mainModuleHeroData": {
        "badgeText": "string",
        "title": "string",
        "titleHighlight": "string",
        "description": "string",
        "primaryButtonText": "string",
        "secondaryButtonText": "string",
        "image": {
          "src": "string",
          "alt": "string",
          "width": 800,
          "height": 600
        }
      }
    }`,

  overviewData: `{
      "overviewData": {
        "title": "string",
        "description": "string",
        "items": [
          {
            "label": "string",
            "value": "string"
          }
        ]
      }
    }`,

  coreCapabilitiesData: `{
      "coreCapabilitiesData": {
        "title": "string",
        "items": [
          {
            "icon": "string",
            "title": "string",
            "description": "string"
          }
        ]
      }
    }`,

  businessContextData: `{
      "businessContextData": {
        "title": "string",
        "description": "string",
        "contextPoints": [
          {
            "heading": "string",
            "content": "string"
          }
        ]
      }
    }`,

  deliveryModelsData: `{
      "deliveryModelsData": {
        "title": "string",
        "models": [
          {
            "name": "string",
            "description": "string",
            "icon": "string"
          }
        ]
      }
    }`,

  integrationCapabilitiesData: `{
      "integrationCapabilitiesData": {
        "title": "string",
        "description": "string",
        "integrations": [
          {
            "system": "string",
            "details": "string"
          }
        ]
      }
    }`,

  TalentCloudData: `{
      "TalentCloudData": {
        "title": "string",
        "profiles": [
          {
            "name": "string",
            "role": "string",
            "experience": "string"
          }
        ]
      }
    }`,

  FeaturedConsultants: `{
      "FeaturedConsultants": {
        "title": "string",
        "consultants": [
          {
            "name": "string",
            "expertise": "string",
            "bio": "string"
          }
        ]
      }
    }`,

  FAQsData: `{
      "FAQsData": {
        "badgeText": "string",
        "title": "string",
        "description": "string",
        "categories": [
          {
            "id": "string",
            "name": "string",
            "faqs": [
              {
                "question": "string",
                "answer": "string"
              }
            ]
          }
        ],
        "buttons": [
          {
            "text": "string",
            "icon": "string",
            "variant": "primary | outline"
          }
        ]
      }
    }`,
};
