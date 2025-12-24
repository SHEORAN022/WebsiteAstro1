import React from "react";
import { ArrowRight, CheckCircle, Loader2, Zap, FileText } from "lucide-react";

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.02)",
  color: "#fff",
  fontSize: 14,
};

const BookingForm = ({
  step,
  selectedService,
  progressWidth,
  name,
  email,
  dob,
  question,
  details,
  photoFile,
  processing,
  confirmationMsg,
  pdfReady,
  onFormSubmit,
  onPayment,
  onReset,
  onBack,
  onSetQuestion,
  onSetDetails,
  onSetName,
  onSetEmail,
  onSetDob,
  onSetPhotoFile,
}) => {
  return (
    <section className="form-section" style={{ padding: "2rem" }}>
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          background: "rgba(255,255,255,0.02)",
          borderRadius: 14,
          padding: 20,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 style={{ margin: 0 }}>Book: {selectedService.title || selectedService.name}</h3>
          <div style={{ color: "#aaa" }}>Step {step} of 3</div>
        </div>

        {/* Progress Bar */}
        <div style={{ marginTop: 12 }}>
          <div
            style={{
              height: 6,
              background: "rgba(255,255,255,0.06)",
              borderRadius: 6,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${Math.max(0, Math.min(100, progressWidth))}%`,
                height: "100%",
                background: "linear-gradient(90deg,#ff00ff,#00ffff)",
                transition: "width .4s",
              }}
            />
          </div>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <form onSubmit={onFormSubmit} style={{ marginTop: 16, display: "grid", gap: 12 }}>
            {selectedService.key === "yesNo" && (
              <div>
                <label style={{ color: "#ddd", fontWeight: 600 }}>Your Question *</label>
                <input
                  type="text"
                  value={question}
                  onChange={(e) => onSetQuestion(e.target.value)}
                  placeholder="E.g. Should I accept this job?"
                  style={inputStyle}
                />
              </div>
            )}

            <div>
              <label style={{ color: "#ddd", fontWeight: 600 }}>Full Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => onSetName(e.target.value)}
                placeholder="Your full name"
                style={inputStyle}
                required
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <label style={{ color: "#ddd", fontWeight: 600 }}>Email *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => onSetEmail(e.target.value)}
                  placeholder="you@email.com"
                  style={inputStyle}
                  required
                />
              </div>
              <div>
                <label style={{ color: "#ddd", fontWeight: 600 }}>Date of Birth *</label>
                <input 
                  type="date" 
                  value={dob} 
                  onChange={(e) => onSetDob(e.target.value)} 
                  style={inputStyle} 
                  required 
                />
              </div>
            </div>

            <div>
              <label style={{ color: "#ddd", fontWeight: 600 }}>Upload Photo (optional)</label>
              <input 
                type="file" 
                accept="image/*" 
                onChange={(e) => onSetPhotoFile(e.target.files[0])} 
              />
              {photoFile && <div style={{ color: "#9fefbc", marginTop: 8 }}>✓ {photoFile.name}</div>}
            </div>

            <div>
              <label style={{ color: "#ddd", fontWeight: 600 }}>Additional Details</label>
              <textarea
                value={details}
                onChange={(e) => onSetDetails(e.target.value)}
                rows={4}
                style={{ ...inputStyle, minHeight: 80 }}
                placeholder="Anything else we should know..."
              />
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <button
                type="submit"
                style={{
                  padding: "10px 14px",
                  background: "linear-gradient(135deg,#ff00ff,#7b2cbf)",
                  color: "#fff",
                  borderRadius: 10,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Continue to Payment <ArrowRight size={14} />
              </button>

              <button
                type="button"
                onClick={onReset}
                style={{
                  padding: "10px 14px",
                  background: "rgba(255,255,255,0.03)",
                  color: "#fff",
                  borderRadius: 10,
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div style={{ marginTop: 16 }}>
            <div style={{ display: "grid", gap: 12 }}>
              <div style={{ background: "rgba(255,255,255,0.01)", padding: 12, borderRadius: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ color: "#aaa" }}>Service</div>
                  <div style={{ fontWeight: 700 }}>{selectedService.title || selectedService.name}</div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                  <div style={{ color: "#aaa" }}>Name</div>
                  <div>{name}</div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                  <div style={{ color: "#aaa" }}>Email</div>
                  <div>{email}</div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                  <div style={{ color: "#aaa" }}>Total</div>
                  <div
                    style={{
                      fontWeight: 800,
                      background: "linear-gradient(135deg,#ff00ff,#00ffff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    ₹{selectedService.price ?? selectedService.amount ?? "—"}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 12 }}>
                <button
                  onClick={onPayment}
                  disabled={processing}
                  style={{
                    padding: "10px 14px",
                    background: "linear-gradient(135deg,#ff00ff,#00ffff)",
                    color: "#fff",
                    borderRadius: 10,
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  {processing ? (
                    <>
                      <Loader2 size={16} className="spin" /> Processing...
                    </>
                  ) : (
                    <>
                      Pay Securely Now <Zap size={14} />
                    </>
                  )}
                </button>

                <button
                  onClick={onBack}
                  style={{
                    padding: "10px 14px",
                    background: "rgba(255,255,255,0.03)",
                    color: "#fff",
                    borderRadius: 10,
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  ← Edit Details
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div style={{ marginTop: 18, textAlign: "center" }}>
            <div
              style={{
                display: "inline-block",
                padding: 18,
                borderRadius: 999,
                background: "rgba(74,222,128,0.12)",
              }}
            >
              <CheckCircle size={44} color="#4ade80" />
            </div>
            <h3 style={{ marginTop: 10 }}>Payment Successful!</h3>
            <p style={{ color: "#c4b5fd" }}>
              {confirmationMsg || `Thanks ${name}. We'll email your reading to ${email} within 24-48 hours.`}
            </p>

            {pdfReady && (
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 8,
                  padding: "10px 14px",
                  borderRadius: 8,
                  background: "rgba(74,222,128,0.08)",
                }}
              >
                <FileText size={18} color="#4ade80" /> Your PDF report is ready
              </div>
            )}

            <div style={{ marginTop: 18 }}>
              <button
                onClick={onReset}
                style={{
                  padding: "10px 14px",
                  background: "rgba(255,255,255,0.03)",
                  color: "#fff",
                  borderRadius: 10,
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                Book Another Reading
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookingForm;