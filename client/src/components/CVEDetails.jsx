import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function CVEDetails() {
  const { id } = useParams();
  const [cve, setCve] = useState(null);

  useEffect(() => {
    const fetchCVE = async () => {
      const res = await axios.get(`http://localhost:5000/api/cves/${id}`);
      setCve(res.data);
    };
    fetchCVE();
  }, [id]);

  if (!cve) return <div>Loading...</div>;

  return (
    <div>
      <h1>CVE Details</h1>
      <p>
        <strong>ID:</strong> {cve.id}
      </p>
      <p>
        <strong>Description:</strong> {cve.descriptions.join(", ")}
      </p>
      <p>
        <strong>Published:</strong>{" "}
        {new Date(cve.published).toLocaleDateString()}
      </p>
      <p>
        <strong>Last Modified:</strong>{" "}
        {new Date(cve.lastModified).toLocaleDateString()}
      </p>
      <p>
        <strong>Status:</strong> {cve.vulnStatus}
      </p>
      {/* Add more fields as necessary */}
    </div>
  );
}

export default CVEDetails;
