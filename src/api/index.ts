const URI = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function getTransportModule() {
  try {
    const res = await fetch(`${URI}/api/modules/tm`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getSalesAndDistributionModule() {
  try {
    const res = await fetch(`${URI}/api/modules/sd`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getControllingModule() {
  try {
    const res = await fetch(`${URI}/api/modules/co`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getFinancialModule() {
  try {
    const res = await fetch(`${URI}/api/modules/fi`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
