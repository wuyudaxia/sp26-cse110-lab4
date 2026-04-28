# DevTools Part 1 - Network Tab

Site: https://cse110-sp26.github.io/Lab4_Hosted/

## Steps I performed
1. Opened the site in Chrome.
2. Opened DevTools (`F12`) and switched to the `Network` tab.
3. Clicked `Fetch Data`.
4. Selected the new `.json` request in the Network list.
5. Checked `Headers` and `Initiator` tabs.

## Answers
1. **Name of the new JSON file:**  
   `citylots.json`

2. **Which file initiated the download:**  
   `expose.js` (shown as `expose.js:2` in Initiator column)

3. **File size of the downloaded file:**  
   `584944 bytes` (shown as `Content-Length`; Network footer also shows about `778 kB`)

4. **How long the download took:**  
   `10 ms` (as shown in Network table)

5. **User-Agent of the request:**  
   `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36`

6. **Server type from response headers:**  
   `GitHub.com`

7. **Last-Modified value:**  
   `Tue, 21 Apr 2026 05:07:14 GMT`

8. **Content-Type value:**  
   `application/json; charset=utf-8`

9. **Function in the initiating file that made the request:**  
   `fetchData` (from `fetchData @ expose.js:2`)
