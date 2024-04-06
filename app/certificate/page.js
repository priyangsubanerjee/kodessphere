"use client";

import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import axios from "axios";

function Page() {
  const [certificates, setCertificates] = useState([]);
  const hanldePrint = (pname, id) => {
    try {
      const input = document.getElementById(id);
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("l", "px", "a4");
        const width = pdf.internal.pageSize.getWidth();
        const height = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, "PNG", 0, 0, width, height, "", "FAST");
        pdf.save(`${pname}.pdf`);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const CertificateComponent = ({ name, position, domain }) => {
    return (
      <div
        onClick={() => hanldePrint(name, name + domain)}
        id={name + domain}
        className="h-[2480px] w-[3508px] scale-[0.4] bg-yellow-50 bg-[url('/c.png')] bg-no-repeat bg-cover relative"
      >
        <h1 className="text-[70px] w-[1200px] text-center absolute left-[1870px] top-[1160px] block font-medium">
          {name}
        </h1>
        <h1 className="text-[70px] w-[700px] absolute text-center left-[1960px] top-[1295px] block font-medium">
          {position == 1 ? `1st` : position == 2 ? `2nd` : `3rd`}
        </h1>
        <h1 className="text-[70px] w-[900px] absolute left-[1510px] text-center top-[1415px] block font-medium">
          {domain}
        </h1>
      </div>
    );
  };

  useEffect(() => {
    (async () => {
      let fetch = await axios.get(
        "https://script.googleusercontent.com/a/macros/kiit.ac.in/echo?user_content_key=dg-I_8oM1QJ-6eMXkSfxXa3Dd0_-evLvYdbvuOTUZkF4QOOcjY9a2VOaoe1R6MhnpCdz6Ew4IscUt2clnT3x7Aps55uBYVFrm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP9LfJUuI_FSESHaYKxUla6ARqYID22DHyF1hHulYT7XE05yXjJK9kBWogfAABQSj4Tcb4nzzt9cEY9WpaiBfdw9-N_Tb6bU390ELGneWRQyVBauCCIUsG7YnSaAsPCb1w4&lib=MyQFTdQyLj-4gvO-FOsUcGyTokzP6RP6a"
      );
      let data = fetch.data.final;
      let m = [];
      let members = data.map((member) => {
        m.push({
          name: member.m1,
          position: member.pos,
          domain: member.domain,
        });
        m.push({
          name: member.m2,
          position: member.pos,
          domain: member.domain,
        });
        if (member.m3 != "") {
          m.push({
            name: member.m3,
            position: member.pos,
            domain: member.domain,
          });
        }
      });
      setCertificates(m);
    })();
  }, []);

  return (
    <div className="">
      {certificates.map((certificate, index) => (
        <CertificateComponent
          key={index}
          name={certificate.name}
          position={certificate.position}
          domain={certificate.domain}
        />
      ))}
    </div>
  );
}

export default Page;
