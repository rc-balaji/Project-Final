import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CVEList.css";
function CVEList() {
  const [cves, setCves] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const fetchCVEs = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/cves?page=${page}&limit=${limit}`
      );
      setCves(res.data);
    };
    fetchCVEs();
  }, [page, limit]);

  return (
    <div>
      <h1>CVE List</h1>
      <table>
        <thead>
          <tr>
            <th>CVE ID</th>
            <th>IDENTIFIER</th>
            <th>PUBLISHED DATE</th>
            <th>LAST MODIFIED DATE</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {cves.map((cve) => (
            <tr
              key={cve.id}
              onClick={() => (window.location.href = `/cves/${cve.id}`)}
            >
              <td>{cve.id}</td>
              <td>{cve.sourceIdentifier}</td>
              <td>{new Date(cve.published).toLocaleDateString()}</td>
              <td>{new Date(cve.lastModified).toLocaleDateString()}</td>
              <td>{cve.vulnStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <select value={limit} onChange={(e) => setLimit(e.target.value)}>
        <option value="10">10</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <button onClick={() => setPage((prev) => prev - 1)} disabled={page === 1}>
        Previous
      </button>
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </div>
  );
}

export default CVEList;
