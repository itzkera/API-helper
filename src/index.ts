import { $ } from "bun";
import { scanEndpoints } from "./scanendpoints";

const baseUrl = process.argv[2];
const endpoints = process.argv.slice(3);

if (!baseUrl || endpoints.length === 0) {
  console.log("Usage: bun run src/index.ts <baseUrl> <endpoint1> <endpoint2> ...");
  process.exit(1);
}

async function main() {
  console.log(`Scanning ${baseUrl} for endpoints:`, endpoints);
  console.log("Welcome to Kera's API finder! Please star ⭐️ the project!");
 const results = await scanEndpoints(baseUrl as string, endpoints as string[]);
  for (const result of results) {
    console.log(`[${result.status}] ${result.url}`);
  }
}

main();