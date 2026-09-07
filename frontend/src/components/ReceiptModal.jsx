import React from 'react';

export default function ReceiptModal({ isOpen, onClose, passData }) {
  if (!isOpen || !passData) return null;

  const handlePrint = () => {
    // Dedicated isolated iframe print ensuring EXACTLY 1 single page
    let iframe = document.getElementById('receipt-print-iframe');
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.id = 'receipt-print-iframe';
      iframe.style.position = 'fixed';
      iframe.style.right = '0';
      iframe.style.bottom = '0';
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.style.border = 'none';
      document.body.appendChild(iframe);
    }

    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>JoyMech_ForgeX_2026_Receipt_${passData.passId}</title>
          <style>
            @page {
              size: A4 portrait;
              margin: 10mm;
            }
            * {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
            }
            html, body {
              width: 100%;
              height: 100%;
              background: #fff;
              color: #111827;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
              line-height: 1.4;
            }
            .receipt-card {
              border: 2px solid #111827;
              border-radius: 8px;
              padding: 24px;
              max-width: 680px;
              margin: 0 auto;
              page-break-inside: avoid;
            }
            .header-top {
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              border-bottom: 2px solid #111827;
              padding-bottom: 12px;
              margin-bottom: 16px;
            }
            .uni-name {
              font-size: 11px;
              font-weight: 800;
              color: #dc2626;
              letter-spacing: 0.5px;
              font-family: monospace;
              text-transform: uppercase;
            }
            .symp-title {
              font-size: 22px;
              font-weight: 900;
              color: #111827;
              text-transform: uppercase;
              margin-top: 2px;
            }
            .symp-sub {
              font-size: 11px;
              font-weight: 600;
              color: #4b5563;
            }
            .badge-box {
              text-align: right;
            }
            .badge-title {
              background: #111827;
              color: #fff;
              font-size: 10px;
              font-weight: 800;
              padding: 3px 8px;
              border-radius: 4px;
              font-family: monospace;
              display: inline-block;
            }
            .token-banner {
              background: #f9fafb;
              border: 1px solid #d1d5db;
              border-radius: 6px;
              padding: 10px 14px;
              margin-bottom: 16px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            .token-num {
              font-size: 20px;
              font-weight: 900;
              color: #dc2626;
              font-family: monospace;
            }
            .status-badge {
              background: #ecfdf5;
              border: 1px solid #10b981;
              color: #065f46;
              font-size: 11px;
              font-weight: 800;
              padding: 2px 8px;
              border-radius: 4px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 16px;
              font-size: 12px;
            }
            td {
              border: 1px solid #e5e7eb;
              padding: 8px 12px;
            }
            td.lbl {
              font-weight: 700;
              color: #374151;
              width: 35%;
              background: #f9fafb;
            }
            td.val {
              font-weight: 600;
              color: #111827;
            }
            .notes {
              background: #f9fafb;
              border-left: 3px solid #dc2626;
              padding: 10px 12px;
              font-size: 11px;
              color: #4b5563;
              margin-bottom: 16px;
              line-height: 1.4;
            }
            .footer-sig {
              border-top: 1px dashed #9ca3af;
              padding-top: 12px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            .seal {
              width: 50px;
              height: 50px;
              border: 2px solid #dc2626;
              border-radius: 50%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-size: 7px;
              font-weight: 800;
              color: #dc2626;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="receipt-card">
            <div class="header-top">
              <div>
                <div class="uni-name">JOY UNIVERSITY • SCHOOL OF ENGINEERING &amp; TECHNOLOGY</div>
                <div class="symp-title">JOYMECH FORGEX 2026</div>
                <div class="symp-sub">1st Annual International Motorsport &amp; Aerospace Symposium</div>
              </div>
              <div class="badge-box">
                <span class="badge-title">OFFICIAL RECEIPT</span>
                <div style="font-size: 10px; font-family: monospace; color: #6b7280; margin-top: 4px;">Ref: ${passData.passId}</div>
              </div>
            </div>

            <div class="token-banner">
              <div>
                <div style="font-size: 9px; font-weight: 700; color: #6b7280; text-transform: uppercase;">ENTRY TOKEN ID</div>
                <div class="token-num">${passData.passId}</div>
              </div>
              <div style="text-align: center;">
                <div style="font-size: 9px; font-weight: 700; color: #6b7280; text-transform: uppercase;">STATUS</div>
                <span class="status-badge">${passData.status || 'CONFIRMED'}</span>
              </div>
              <div style="text-align: right;">
                <div style="font-size: 9px; font-weight: 700; color: #6b7280; text-transform: uppercase;">DATES</div>
                <div style="font-size: 12px; font-weight: 700; font-family: monospace;">21 - 22 SEPT 2026</div>
              </div>
            </div>

            <table>
              <tr>
                <td class="lbl">Participant Name:</td>
                <td class="val">${passData.name || 'Participant'}</td>
              </tr>
              <tr>
                <td class="lbl">College / Institution:</td>
                <td class="val">${passData.college || 'Joy University'}</td>
              </tr>
              <tr>
                <td class="lbl">Email Address:</td>
                <td class="val" style="font-family: monospace;">${passData.email || 'N/A'}</td>
              </tr>
              <tr>
                <td class="lbl">Phone Number:</td>
                <td class="val" style="font-family: monospace;">${passData.phone || 'N/A'}</td>
              </tr>
              <tr>
                <td class="lbl">Registered Track Arena:</td>
                <td class="val" style="color: #dc2626; font-weight: 800;">${passData.event || 'Symposium Track'}</td>
              </tr>
              <tr>
                <td class="lbl">Venue Location:</td>
                <td class="val">Joy University SET Campus, Raja Nagar, Vadakangulam</td>
              </tr>
              <tr>
                <td class="lbl">Registration Fee:</td>
                <td class="val" style="color: #065f46; font-weight: 800;">PAID &amp; CONFIRMED</td>
              </tr>
            </table>

            <div class="notes">
              <strong>Important Participant Instructions:</strong><br/>
              • Present this official receipt or digital token code at the registration reception counter upon arrival.<br/>
              • All participants must carry their valid college identity card for accreditation check.<br/>
              • Reporting Time: <strong>08:30 AM IST</strong> on 21st September 2026 at the Main Auditorium reception.
            </div>

            <div class="footer-sig">
              <div style="display: flex; align-items: center; gap: 10px;">
                <div class="seal">
                  <span>JOY UNIV</span>
                  <span style="font-size: 8px; font-weight: 900;">2026</span>
                  <span>SEAL</span>
                </div>
                <div>
                  <div style="font-size: 11px; font-weight: 700;">Symposium Secretariate</div>
                  <div style="font-size: 10px; color: #6b7280; font-family: monospace;">Joy University SET Campus</div>
                  <div style="font-size: 10px; color: #6b7280; font-family: monospace;">Helpline: +91 89770 91574</div>
                </div>
              </div>

              <div style="text-align: right;">
                <div style="font-size: 12px; font-weight: 800; font-family: monospace;">Dr. Praveen Laws</div>
                <div style="font-size: 10px; color: #6b7280;">Faculty Coordinator / Chair</div>
                <div style="font-size: 9px; color: #9ca3af; font-family: monospace;">JoyMech ForgeX 2026</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `);
    doc.close();

    setTimeout(() => {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    }, 250);
  };

  const handleDownload = () => {
    const receiptHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JoyMech_ForgeX_2026_Receipt_${passData.passId || 'PASS'}</title>
  <style>
    @page { size: A4 portrait; margin: 10mm; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #f3f4f6; padding: 20px; color: #111827; }
    .receipt-box { max-width: 650px; margin: 0 auto; background: white; border: 2px solid #111827; border-radius: 12px; padding: 24px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); }
    .header { border-bottom: 2px solid #111827; padding-bottom: 12px; margin-bottom: 16px; }
    .title { font-size: 22px; font-weight: 900; color: #111827; margin: 4px 0; text-transform: uppercase; }
    .sub { font-size: 11px; font-weight: 700; color: #dc2626; letter-spacing: 1px; text-transform: uppercase; font-family: monospace; }
    .token-box { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 10px 14px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; }
    .token-id { font-size: 20px; font-weight: 900; color: #dc2626; font-family: monospace; }
    .badge { background: #ecfdf5; border: 1px solid #10b981; color: #065f46; font-size: 11px; font-weight: 800; padding: 3px 8px; border-radius: 4px; text-transform: uppercase; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 12px; }
    th, td { border: 1px solid #e5e7eb; padding: 8px 12px; text-align: left; }
    td.label { font-weight: 700; color: #4b5563; width: 35%; background: #f9fafb; }
    td.value { font-weight: 600; color: #111827; }
    .instructions { background: #f9fafb; border-left: 3px solid #dc2626; padding: 10px 12px; font-size: 11px; color: #4b5563; margin-bottom: 16px; line-height: 1.4; }
    .footer { border-top: 1px dashed #9ca3af; padding-top: 12px; display: flex; justify-content: space-between; align-items: center; font-size: 11px; }
    .seal { width: 50px; height: 50px; border: 2px solid #dc2626; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 7px; font-weight: 800; color: #dc2626; text-transform: uppercase; text-align: center; }
  </style>
</head>
<body>
  <div class="receipt-box">
    <div class="header">
      <div class="sub">JOY UNIVERSITY • SCHOOL OF ENGINEERING &amp; TECHNOLOGY</div>
      <div class="title">JOYMECH FORGEX 2026</div>
      <div style="font-size: 12px; color: #6b7280; font-weight: 600;">OFFICIAL SYMPOSIUM ACCREDITATION RECEIPT &amp; ENTRY PASS</div>
    </div>
    
    <div class="token-box">
      <div>
        <div style="font-size: 10px; font-weight: 700; color: #6b7280; text-transform: uppercase;">ENTRY TOKEN ID</div>
        <div class="token-id">${passData.passId || 'JMF26-XXXX'}</div>
      </div>
      <div class="badge">${passData.status || 'CONFIRMED'}</div>
    </div>

    <table>
      <tr>
        <td class="label">Participant Name</td>
        <td class="value">${passData.name || 'Participant'}</td>
      </tr>
      <tr>
        <td class="label">College / Institution</td>
        <td class="value">${passData.college || 'Joy University'}</td>
      </tr>
      <tr>
        <td class="label">Email Address</td>
        <td class="value">${passData.email || 'N/A'}</td>
      </tr>
      <tr>
        <td class="label">Phone Number</td>
        <td class="value">${passData.phone || 'N/A'}</td>
      </tr>
      <tr>
        <td class="label">Registered Track</td>
        <td class="value" style="color: #dc2626; font-weight: 800;">${passData.event || 'Symposium Arena'}</td>
      </tr>
      <tr>
        <td class="label">Symposium Dates</td>
        <td class="value">21 - 22 September 2026</td>
      </tr>
      <tr>
        <td class="label">Venue</td>
        <td class="value">Joy University, Raja Nagar, Vadakangulam, Tamil Nadu</td>
      </tr>
      <tr>
        <td class="label">Accreditation Fee</td>
        <td class="value" style="color: #065f46; font-weight: 800;">PAID &amp; CONFIRMED</td>
      </tr>
    </table>

    <div class="instructions">
      <strong>Important Participant Instructions:</strong><br/>
      • Present this receipt (printed or digital token) at the Registration Reception Desk on arrival.<br/>
      • Carry your official University / College ID card for entry verification.<br/>
      • Reporting time: <strong>08:30 AM IST</strong> on 21st September 2026 at the Main Auditorium.
    </div>

    <div class="footer">
      <div style="display: flex; align-items: center; gap: 10px;">
        <div class="seal">
          <span>JOY UNIV</span>
          <span style="font-size: 8px; font-weight: 900;">2026</span>
          <span>SEAL</span>
        </div>
        <div>
          <div style="font-weight: 700;">Symposium Secretariate</div>
          <div style="color: #6b7280; font-family: monospace;">JoyMech ForgeX 2026</div>
        </div>
      </div>
      <div style="text-align: right;">
        <div style="font-weight: 800; font-size: 12px;">Dr. Praveen Laws</div>
        <div style="color: #6b7280;">Faculty Coordinator / Chair</div>
      </div>
    </div>
  </div>
</body>
</html>`;

    const blob = new Blob([receiptHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `JoyMech_ForgeX_2026_Receipt_${passData.passId || 'Token'}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl bg-white text-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-300 flex flex-col max-h-[92vh]">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-3 bg-gray-900 text-white border-b border-gray-800 shrink-0">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-electric-cyan text-[20px]">receipt_long</span>
            <span className="font-display-hero text-[14px] font-bold uppercase tracking-wider">
              Official Registration Receipt
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-white rounded text-xs font-bold uppercase transition-all flex items-center gap-1 cursor-pointer border border-gray-700"
              title="Download Receipt File"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              <span>Download</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-corsa-red hover:bg-[#c91919] text-white rounded text-xs font-bold uppercase transition-all flex items-center gap-1 cursor-pointer shadow-[0_0_10px_rgba(235,35,35,0.4)]"
              title="Print Exactly 1-Page Receipt"
            >
              <span className="material-symbols-outlined text-[16px]">print</span>
              <span>Print (1 Page)</span>
            </button>
            <button
              onClick={onClose}
              className="w-7 h-7 rounded bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer ml-1"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        </div>

        {/* Modal On-Screen View */}
        <div className="p-6 md:p-8 overflow-y-auto">
          
          {/* Header */}
          <div className="border-b-2 border-gray-900 pb-4 mb-4 flex items-start justify-between">
            <div>
              <div className="text-[11px] font-mono font-bold tracking-widest text-red-700 uppercase">
                JOY UNIVERSITY • SCHOOL OF ENGINEERING &amp; TECHNOLOGY
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-gray-900 mt-0.5">
                JOYMECH FORGEX 2026
              </h2>
              <div className="text-xs font-semibold text-gray-600 uppercase">
                1st Annual International Motorsport &amp; Aerospace Symposium
              </div>
            </div>
            <div className="text-right">
              <span className="inline-block px-2.5 py-1 bg-black text-white text-[10px] font-mono font-bold uppercase rounded">
                ACCREDITATION RECEIPT
              </span>
              <div className="text-[10px] font-mono text-gray-500 mt-1">
                Ref: {passData.passId}
              </div>
            </div>
          </div>

          {/* Token & Status Banner */}
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-3.5 mb-4 flex items-center justify-between">
            <div>
              <span className="text-[9px] font-mono uppercase text-gray-500 font-bold block">
                OFFICIAL ENTRY TOKEN ID
              </span>
              <span className="text-xl md:text-2xl font-black font-mono text-red-600 tracking-wider">
                {passData.passId}
              </span>
            </div>
            <div className="text-center">
              <span className="text-[9px] font-mono uppercase text-gray-500 font-bold block">
                STATUS
              </span>
              <span className="inline-block px-2.5 py-0.5 bg-emerald-100 border border-emerald-500 text-emerald-800 text-xs font-bold font-mono uppercase rounded">
                {passData.status || 'CONFIRMED'}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[9px] font-mono uppercase text-gray-500 font-bold block">
                DATES
              </span>
              <span className="text-xs font-bold text-gray-800 font-mono">
                21 - 22 SEPT 2026
              </span>
            </div>
          </div>

          {/* Data Table */}
          <table className="w-full text-left text-xs border border-gray-300 mb-4 border-collapse">
            <tbody>
              <tr className="border-b border-gray-300 bg-gray-50">
                <td className="py-2 px-3 font-bold text-gray-700 w-1/3 border-r border-gray-300">Participant Name:</td>
                <td className="py-2 px-3 font-semibold text-gray-900">{passData.name}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-2 px-3 font-bold text-gray-700 border-r border-gray-300">College / Institution:</td>
                <td className="py-2 px-3 text-gray-900">{passData.college}</td>
              </tr>
              <tr className="border-b border-gray-300 bg-gray-50">
                <td className="py-2 px-3 font-bold text-gray-700 border-r border-gray-300">Email Address:</td>
                <td className="py-2 px-3 text-gray-900 font-mono">{passData.email || 'N/A'}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-2 px-3 font-bold text-gray-700 border-r border-gray-300">Phone Number:</td>
                <td className="py-2 px-3 text-gray-900 font-mono">{passData.phone || 'N/A'}</td>
              </tr>
              <tr className="border-b border-gray-300 bg-gray-50">
                <td className="py-2 px-3 font-bold text-gray-700 border-r border-gray-300">Registered Track Arena:</td>
                <td className="py-2 px-3 font-bold text-red-700">{passData.event}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-2 px-3 font-bold text-gray-700 border-r border-gray-300">Venue Location:</td>
                <td className="py-2 px-3 text-gray-900">Joy University SET Campus, Raja Nagar, Vadakangulam</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="py-2 px-3 font-bold text-gray-700 border-r border-gray-300">Registration Fee:</td>
                <td className="py-2 px-3 font-bold text-emerald-800 font-mono">PAID &amp; CONFIRMED</td>
              </tr>
            </tbody>
          </table>

          {/* Instructions */}
          <div className="border border-gray-300 rounded p-3 mb-4 bg-gray-50 text-[11px] text-gray-700 space-y-1">
            <div className="font-bold uppercase text-gray-900">Participant Guidelines:</div>
            <div>• Present this receipt or digital token code at the registration counter upon arrival.</div>
            <div>• Carry your valid college identity card for accreditation check.</div>
            <div>• Reporting Time: <strong>08:30 AM IST</strong> on 21st September 2026 at Main Auditorium.</div>
          </div>

          {/* Footer Signature & Seal */}
          <div className="flex items-center justify-between pt-3 border-t border-dashed border-gray-400 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 border-2 border-red-700 rounded-full flex flex-col items-center justify-center text-center p-1 text-[7px] font-bold uppercase text-red-700">
                <span>JOY UNIV</span>
                <span className="text-[8px] font-black">2026</span>
                <span>SEAL</span>
              </div>
              <div className="text-[10px] text-gray-600">
                <div className="font-bold">Symposium Secretariate</div>
                <div className="font-mono">Joy University SET Campus</div>
                <div className="font-mono">Helpline: +91 89770 91574</div>
              </div>
            </div>

            <div className="text-right">
              <div className="font-mono text-xs font-bold text-gray-900">Dr. Praveen Laws</div>
              <div className="text-[9px] text-gray-500 uppercase tracking-wider">Faculty Coordinator</div>
              <div className="text-[9px] text-gray-400 font-mono">JoyMech ForgeX 2026</div>
            </div>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-3 bg-gray-100 border-t border-gray-300 flex items-center justify-between">
          <span className="text-xs text-gray-500 font-mono">
            Token: <strong className="text-gray-900">{passData.passId}</strong>
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="px-4 py-1.5 bg-gray-900 hover:bg-gray-800 text-white rounded text-xs font-bold uppercase transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              <span>Download</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-1.5 bg-corsa-red hover:bg-[#c91919] text-white rounded text-xs font-bold uppercase transition-all cursor-pointer flex items-center gap-1.5 shadow"
            >
              <span className="material-symbols-outlined text-[16px]">print</span>
              <span>Print (1 Page)</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
