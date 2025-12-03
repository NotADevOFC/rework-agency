const WP_GRAPHQL_URL = "https://admin.rework.agency/graphql";
async function fetchGraphQL(query, variables) {
  const response = await fetch(WP_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query, variables })
  });
  if (!response.ok) {
    throw new Error(`GraphQL request failed: ${response.statusText}`);
  }
  const json = await response.json();
  if (json.errors) {
    console.error("GraphQL Errors:", json.errors);
    throw new Error(json.errors.map((e) => e.message).join("\n"));
  }
  return json.data;
}
async function isWordPressAvailable() {
  try {
    const response = await fetch(WP_GRAPHQL_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: "{ __typename }" })
    });
    return response.ok;
  } catch {
    return false;
  }
}

export { fetchGraphQL as f, isWordPressAvailable as i };
