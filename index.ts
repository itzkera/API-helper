import { scanEndpoint} from "./scanendpoints";


const baseUrl = process.argv[2];
const endpoint = process.argv.slice(3);


if (!baseUrl || endpoint.length === 0) {
  console.log("Usage: bun run src/index.ts <baseUrl> <endpoint1> <endpoint2> CLOSING!!");
  process.exit(1);
}

async function main() {
  console.log(`Scanning ${baseUrl] for endpoints:`, endpoints);
  console.log("welcome to Kera's API finder pls star");
const results = await scanEndpoint(baseUrl, endpoints);
 for (const result of results) {
    console.log(`[${result.status}] ${result.url}`);
  }
}


main();
