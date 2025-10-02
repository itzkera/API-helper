import { writeFileSync, appendFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

export async function scanEndpoints(baseUrl: string, endpoints: string[]) {
  const results: { url: string; status: number }[] = [];
    console.log("scanning!!");
  for (const endpoint of endpoints) {
    const url = baseUrl.endsWith("/") ? baseUrl + endpoint : `${baseUrl}/${endpoint}`;
    try {
      const res = await fetch(url);
      results.push({ url, status: res.status });
    } catch (error) {
      results.push({ url, status: -1 });
    }
  }
  return results;
}


const logDir = join(process.cwd(), "logs");
const logFile = join(logDir, "scan.log");

export function initLogger() {
  if (!existsSync(logDir)) {
    mkdirSync(logDir);
  }
  if (!existsSync(logFile)) {
    writeFileSync(logFile, "", "utf-8");
  }
}


export function logScan(message: string) {
  appendFileSync(logFile, `${new Date().toISOString()} - ${message}\n`, "utf-8");
}