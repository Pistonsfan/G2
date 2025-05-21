const root = document.getElementById('root');
root.innerHTML = `
  <h1>AI Report Generator</h1>
  <p>Select the type of report:</p>
  <select id="report-type">
    <option value="sample">Sample Collection</option>
    <option value="concrete">Concrete Report</option>
    <option value="density">Density Report</option>
  </select>
  <br/><br/>
  <textarea id="input" rows="10" cols="50" placeholder="Enter field notes here..."></textarea>
  <br/><br/>
  <button onclick="generateReport()">Generate Report</button>
  <pre id="output"></pre>
`;

function generateReport() {
  const type = document.getElementById('report-type').value;
  const input = document.getElementById('input').value;
  const output = document.getElementById('output');
  let report = "";

  if (type === "sample") {
    report = `Sample Collection Report\n\nField Notes:\n${input}\n\nSummary: Sample collection conducted. Samples sent for testing.`;
  } else if (type === "concrete") {
    report = `Concrete Report\n\nField Notes:\n${input}\n\nSummary: Concrete poured, tested, and verified.`;
  } else if (type === "density") {
    report = `Density Report\n\nField Notes:\n${input}\n\nSummary: In-place density tests performed and results confirmed.`;
  }

  output.textContent = report;
}