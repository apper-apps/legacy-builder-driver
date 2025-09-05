import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import { toast } from "react-toastify";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    postal: "",
    country: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    nameOnCard: "",
    agreeToTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast.error("Please agree to the Terms and Privacy Policy");
      return;
    }

    // Simulate payment processing
    toast.success("Payment processed successfully! Redirecting to download...", {
      position: "top-right",
      autoClose: 3000,
    });

    // In a real app, this would process payment and redirect to thank you page
    setTimeout(() => {
      toast.info("Thank you! Check your email for the download link.");
    }, 2000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-sky-600 grid place-items-center text-white font-bold">
              IB
            </div>
            <span className="font-semibold">CILC Family Business Advisory</span>
          </div>
          <div className="text-xs text-slate-500">Secure • Encrypted • 7‑Day Guarantee</div>
        </div>
      </header>

      {/* Checkout Section */}
      <main className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-3 gap-10 items-start">
          
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <Card className="p-6" style={{ boxShadow: '0 10px 30px rgba(2,8,23,.12)' }}>
              <h1 className="font-display text-2xl md:text-3xl font-bold">Secure Checkout</h1>
              <p className="mt-2 text-slate-600">Complete your purchase and get instant access to the PDF.</p>

              <form className="mt-8 grid gap-6" onSubmit={handleSubmit}>
                {/* Contact Information */}
                <div>
                  <h2 className="font-semibold">Contact Information</h2>
                  <div className="mt-3 grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-slate-600">First name</label>
                      <input 
                        className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-600">Last name</label>
                      <input 
                        className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-sm text-slate-600">Email (for receipt & download link)</label>
                      <input 
                        type="email" 
                        className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                  </div>
                </div>

                {/* Billing Address */}
                <div>
                  <h2 className="font-semibold">Billing Address</h2>
                  <div className="mt-3 grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="text-sm text-slate-600">Street address</label>
                      <input 
                        className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-600">City</label>
                      <input 
                        className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-600">State/Province</label>
                      <input 
                        className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-600">Postal code</label>
                      <input 
                        className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        name="postal"
                        value={formData.postal}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-600">Country</label>
                      <input 
                        className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div>
                  <h2 className="font-semibold">Payment</h2>
                  <div className="mt-3 grid md:grid-cols-4 gap-4 items-end">
                    <div className="md:col-span-4">
                      <label className="text-sm text-slate-600">Card number</label>
                      <input 
                        className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        inputMode="numeric" 
                        autoComplete="cc-number" 
                        placeholder="4242 4242 4242 4242"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-600">Expiry</label>
                      <input 
                        className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="MM/YY" 
                        autoComplete="cc-exp"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-600">CVC</label>
                      <input 
                        className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="CVC" 
                        autoComplete="cc-csc"
                        name="cvc"
                        value={formData.cvc}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-600">Name on card</label>
                      <input 
                        className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        name="nameOnCard"
                        value={formData.nameOnCard}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">Payments are securely processed. Replace these inputs with your live Stripe Elements or provider widget.</p>
                </div>

                <div className="flex items-start gap-3">
                  <input 
                    id="agree" 
                    type="checkbox" 
                    required 
                    className="mt-1 h-4 w-4"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="agree" className="text-sm text-slate-600">
                    I agree to the <span className="underline cursor-pointer">Terms</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
                  </label>
                </div>

                <Button 
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-7 py-4 text-white font-semibold shadow hover:bg-sky-700 transition"
                  size="lg"
                >
                  Pay $9.97
                </Button>
                <p className="text-xs text-slate-500">You will be redirected to the thank‑you page with your download link.</p>
              </form>
            </Card>
          </div>

          {/* Order Summary */}
          <aside className="lg:col-span-1">
            <Card className="p-6" style={{ boxShadow: '0 10px 30px rgba(2,8,23,.12)' }}>
              <div className="flex items-center gap-4">
                <div className="w-20 h-28 bg-gradient-to-br from-navy-500 to-primary-600 rounded-lg flex items-center justify-center">
                  <ApperIcon name="BookOpen" className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Family Business Harmony Quick‑Start Guide</h3>
                  <p className="text-xs text-slate-600">PDF • Instant Download • Family License</p>
                </div>
              </div>
              <hr className="my-4 border-slate-200" />
              <div className="flex justify-between text-slate-700 text-sm">
                <span>Subtotal</span>
                <span>$9.97</span>
              </div>
              <div className="flex justify-between text-slate-700 text-sm mt-1">
                <span>VAT / Sales Tax</span>
                <span>—</span>
              </div>
              <hr className="my-4 border-slate-200" />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>$9.97</span>
              </div>
              <p className="mt-4 text-xs text-slate-500">7‑day money‑back guarantee.</p>
            </Card>

            <Card className="mt-6 p-6" style={{ boxShadow: '0 10px 30px rgba(2,8,23,.12)' }}>
              <h4 className="font-semibold">What happens next?</h4>
              <ol className="mt-2 text-sm text-slate-700 space-y-2 list-decimal list-inside">
                <li>Complete your payment.</li>
                <li>Get the download link on the confirmation page + via email.</li>
                <li>See your special invite to the Family Business Bootcamp.</li>
              </ol>
            </Card>

            <Card className="mt-6 p-6" style={{ boxShadow: '0 10px 30px rgba(2,8,23,.12)' }}>
              <h4 className="font-semibold">Need help?</h4>
              <p className="mt-1 text-sm text-slate-700">
                Email <span className="underline cursor-pointer">info@cilcadvisory.com</span>
              </p>
            </Card>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-10 text-sm text-slate-600">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <p>© {currentYear} CILC Family Business Advisory • All rights reserved.</p>
          <nav className="flex gap-6">
            <span className="hover:text-slate-900 cursor-pointer">Privacy</span>
            <span className="hover:text-slate-900 cursor-pointer">Terms</span>
            <span className="hover:text-slate-900 cursor-pointer">Support</span>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default CheckoutPage;