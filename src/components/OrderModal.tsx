import React, { useState } from 'react';
import { CartItem, OrderFormData } from '../types';
import { 
  ShoppingBag, X, Plus, Minus, Trash2, Copy, Check, 
  Building2, CreditCard, ArrowRight, ArrowLeft, 
  CheckCircle2, Truck, Store, MessageSquare, Download, Share2, Printer, FileText
} from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onOpenMenu: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOpenMenu
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [copied, setCopied] = useState(false);
  const [receiptCopied, setReceiptCopied] = useState(false);
  const [orderRef, setOrderRef] = useState('');

  const [formData, setFormData] = useState<OrderFormData>({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    orderType: 'delivery',
    paymentMethod: 'bank_transfer',
    specialNotes: ''
  });

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, c) => acc + c.item.numericPrice * c.quantity, 0);
  const deliveryFee = formData.orderType === 'delivery' && subtotal > 0 ? 1500 : 0;
  const grandTotal = subtotal + deliveryFee;

  const formatPrice = (amount: number) => {
    return '₦' + amount.toLocaleString();
  };

  const handleCopyAccount = () => {
    navigator.clipboard.writeText('9078076906');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    if (formData.orderType === 'delivery' && !formData.address) {
      alert('Please provide your delivery address.');
      return;
    }
    const randomRef = 'AYO-' + Math.floor(100000 + Math.random() * 900000);
    setOrderRef(randomRef);
    setStep(3);
  };

  const handleCompleteOrder = () => {
    setStep(4);
  };

  const generateWhatsAppMessage = () => {
    const itemsText = cart.map(c => `• ${c.quantity}x ${c.item.name} (${formatPrice(c.item.numericPrice * c.quantity)})`).join('%0A');
    const text = `*NEW ORDER - ÀYỌ̀ RESTAURANT*%0A` +
      `*Order Ref:* ${orderRef}%0A` +
      `*Name:* ${formData.fullName}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Order Type:* ${formData.orderType.toUpperCase()}%0A` +
      (formData.orderType === 'delivery' ? `*Address:* ${formData.address}%0A` : '') +
      `----------------------------%0A` +
      `*ORDER ITEMS:*%0A${itemsText}%0A` +
      `----------------------------%0A` +
      `*Subtotal:* ${formatPrice(subtotal)}%0A` +
      (deliveryFee > 0 ? `*Delivery Fee:* ${formatPrice(deliveryFee)}%0A` : '') +
      `*TOTAL:* ${formatPrice(grandTotal)}%0A` +
      `----------------------------%0A` +
      `*PAYMENT DETAILS:*%0A` +
      `Paid to: Opay Bank (9078076906 - Abiodun Samuel)%0A` +
      `Status: Payment Transfer Completed%0A%0A` +
      `Please confirm my order. Thank you!`;

    return `https://wa.me/2349078076906?text=${text}`;
  };

  const handleDownloadReceipt = () => {
    const dateStr = new Date().toLocaleString('en-NG', { dateStyle: 'full', timeStyle: 'short' });
    const itemsList = cart.map(c => `  - ${c.quantity}x ${c.item.name} @ ${formatPrice(c.item.numericPrice)} = ${formatPrice(c.item.numericPrice * c.quantity)}`).join('\n');
    
    const receiptContent = `
==================================================
           ÀYỌ̀ CONTEMPORARY NIGERIAN RESTAURANT
           24 Heritage Avenue, Victoria Island, Lagos
           Official Digital Order Receipt & Invoice
==================================================

ORDER REFERENCE : #${orderRef}
DATE & TIME     : ${dateStr}
STATUS          : PAYMENT COMPLETED & VERIFIED

CUSTOMER DETAILS:
-----------------
Name            : ${formData.fullName}
Phone / WhatsApp: ${formData.phone}
Email           : ${formData.email || 'N/A'}
Fulfillment     : ${formData.orderType.toUpperCase()}
${formData.orderType === 'delivery' ? `Delivery Address: ${formData.address}` : 'Pickup Location : ÀYỌ̀ Restaurant, Victoria Island'}
${formData.specialNotes ? `Special Notes   : ${formData.specialNotes}` : ''}

ORDER SUMMARY:
--------------
${itemsList}

--------------------------------------------------
Subtotal        : ${formatPrice(subtotal)}
Delivery Fee    : ${formatPrice(deliveryFee)}
GRAND TOTAL     : ${formatPrice(grandTotal)}
--------------------------------------------------

PAYMENT INFORMATION:
--------------------
Payment Method  : Direct Bank Transfer (Opay)
Bank Name       : Opay Bank
Account Number  : 9078076906
Account Name    : Abiodun Samuel
Payment Status  : SUCCESSFUL / TRANSFERRED

==================================================
  Thank you for dining with ÀYỌ̀ Restaurant!
==================================================
`;

    const blob = new Blob([receiptContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `AYO_Receipt_${orderRef}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrintReceipt = () => {
    const dateStr = new Date().toLocaleString('en-NG', { dateStyle: 'full', timeStyle: 'short' });
    const itemsHtml = cart.map(c => `
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${c.quantity}x ${c.item.name}</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #eee; text-align: right;">${formatPrice(c.item.numericPrice * c.quantity)}</td>
      </tr>
    `).join('');

    const printWindow = window.open('', '_blank', 'width=600,height=700');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>ÀYỌ̀ Receipt #${orderRef}</title>
            <style>
              body { font-family: 'Helvetica Neue', Arial, sans-serif; padding: 24px; color: #1a1410; max-width: 480px; margin: 0 auto; }
              .header { text-align: center; border-bottom: 2px solid #1a1410; padding-bottom: 16px; margin-bottom: 16px; }
              .title { font-size: 22px; font-weight: bold; letter-spacing: 2px; }
              .subtitle { font-size: 12px; color: #666; margin-top: 4px; }
              .badge { display: inline-block; background: #e8a33d; color: #1a1410; font-size: 11px; padding: 4px 12px; border-radius: 12px; font-weight: bold; margin-top: 8px; }
              .section { margin-bottom: 16px; font-size: 13px; }
              .section-title { font-weight: bold; font-size: 11px; text-transform: uppercase; color: #888; border-bottom: 1px solid #ddd; padding-bottom: 4px; margin-bottom: 8px; }
              table { width: 100%; border-collapse: collapse; font-size: 13px; }
              .total-row { font-weight: bold; font-size: 15px; }
              .footer { text-align: center; margin-top: 24px; font-size: 11px; color: #888; border-top: 1px solid #eee; padding-top: 16px; }
            </style>
          </head>
          <body>
            <div class="header">
              <div class="title">À Y Ọ̀</div>
              <div class="subtitle">Contemporary West African Fine Dining</div>
              <div class="badge">RECEIPT #${orderRef}</div>
            </div>
            <div class="section">
              <div class="section-title">Customer & Fulfillment</div>
              <div><strong>Name:</strong> ${formData.fullName}</div>
              <div><strong>Phone:</strong> ${formData.phone}</div>
              <div><strong>Date:</strong> ${dateStr}</div>
              <div><strong>Order Type:</strong> ${formData.orderType.toUpperCase()}</div>
              ${formData.orderType === 'delivery' ? `<div><strong>Address:</strong> ${formData.address}</div>` : ''}
            </div>
            <div class="section">
              <div class="section-title">Order Items</div>
              <table>
                ${itemsHtml}
                <tr>
                  <td style="padding: 6px 0; color: #666;">Subtotal</td>
                  <td style="padding: 6px 0; text-align: right; color: #666;">${formatPrice(subtotal)}</td>
                </tr>
                ${deliveryFee > 0 ? `
                <tr>
                  <td style="padding: 6px 0; color: #666;">Delivery Fee</td>
                  <td style="padding: 6px 0; text-align: right; color: #666;">${formatPrice(deliveryFee)}</td>
                </tr>
                ` : ''}
                <tr class="total-row">
                  <td style="padding: 10px 0; border-top: 2px solid #1a1410;">TOTAL PAID</td>
                  <td style="padding: 10px 0; border-top: 2px solid #1a1410; text-align: right; color: #d49232;">${formatPrice(grandTotal)}</td>
                </tr>
              </table>
            </div>
            <div class="section">
              <div class="section-title">Payment Confirmation</div>
              <div><strong>Bank:</strong> Opay Bank</div>
              <div><strong>Account Number:</strong> 9078076906</div>
              <div><strong>Account Name:</strong> Abiodun Samuel</div>
              <div><strong>Status:</strong> Paid & Verified</div>
            </div>
            <div class="footer">
              Thank you for dining with ÀYỌ̀ Restaurant • Victoria Island, Lagos
            </div>
            <script>
              window.onload = function() { window.print(); }
            </script>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  const handleShareReceipt = async () => {
    const receiptText = `ÀYỌ̀ RESTAURANT DIGITAL RECEIPT\nOrder Ref: #${orderRef}\nCustomer: ${formData.fullName}\nTotal Paid: ${formatPrice(grandTotal)}\nBank: Opay (9078076906 - Abiodun Samuel)\nFulfillment: ${formData.orderType.toUpperCase()}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `ÀYỌ̀ Digital Receipt - Order #${orderRef}`,
          text: receiptText,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share canceled or error:', err);
      }
    } else {
      navigator.clipboard.writeText(receiptText);
      setReceiptCopied(true);
      setTimeout(() => setReceiptCopied(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fade-in">
      <div 
        className="bg-[#1A1410] border border-[#3D2E24] w-full max-w-2xl rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-[#F5EDE4]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-6 bg-[#2A1F18] border-b border-[#3D2E24] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E8A33D]/10 border border-[#E8A33D]/30 flex items-center justify-center text-[#E8A33D]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#F5EDE4]">
                {step === 1 && 'Your Order Basket'}
                {step === 2 && 'Delivery & Guest Details'}
                {step === 3 && 'Direct Bank Payment (Opay)'}
                {step === 4 && 'Order Placed Successfully'}
              </h2>
              <p className="text-xs text-[#8A7A6A] font-light">
                {step === 1 && `${cart.reduce((a, c) => a + c.quantity, 0)} item(s) selected`}
                {step === 2 && 'Enter where to deliver your meal'}
                {step === 3 && 'Transfer to Opay account below'}
                {step === 4 && `Ref ID: ${orderRef}`}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#8A7A6A] hover:text-[#F5EDE4] hover:bg-[#3D2E24]/50 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Steps Progress Indicator */}
        <div className="px-6 py-2.5 bg-[#140F0C] border-b border-[#3D2E24]/60 flex items-center justify-between text-xs font-sans shrink-0">
          <div className={`flex items-center gap-2 ${step >= 1 ? 'text-[#E8A33D]' : 'text-[#8A7A6A]'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 1 ? 'bg-[#E8A33D] text-[#1A1410] font-bold' : 'bg-[#3D2E24]'}`}>1</span>
            <span className="hidden sm:inline">Basket</span>
          </div>
          <span className="text-[#3D2E24]">/</span>
          <div className={`flex items-center gap-2 ${step >= 2 ? 'text-[#E8A33D]' : 'text-[#8A7A6A]'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-[#E8A33D] text-[#1A1410] font-bold' : 'bg-[#3D2E24]'}`}>2</span>
            <span className="hidden sm:inline">Details</span>
          </div>
          <span className="text-[#3D2E24]">/</span>
          <div className={`flex items-center gap-2 ${step >= 3 ? 'text-[#E8A33D]' : 'text-[#8A7A6A]'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 3 ? 'bg-[#E8A33D] text-[#1A1410] font-bold' : 'bg-[#3D2E24]'}`}>3</span>
            <span className="hidden sm:inline">Payment</span>
          </div>
          <span className="text-[#3D2E24]">/</span>
          <div className={`flex items-center gap-2 ${step === 4 ? 'text-emerald-400' : 'text-[#8A7A6A]'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 4 ? 'bg-emerald-400 text-[#1A1410] font-bold' : 'bg-[#3D2E24]'}`}>4</span>
            <span className="hidden sm:inline">Confirmation</span>
          </div>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {/* STEP 1: CART BASKET */}
          {step === 1 && (
            <div>
              {cart.length === 0 ? (
                <div className="text-center py-12 px-4 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#2A1F18] border border-[#3D2E24] flex items-center justify-center text-[#8A7A6A] mx-auto">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#F5EDE4]">Your Basket is Empty</h3>
                  <p className="text-sm text-[#8A7A6A] max-w-sm mx-auto font-light">
                    Explore our authentic Nigerian delicacies and add dishes to place an online order.
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenMenu();
                    }}
                    className="inline-flex items-center gap-2 bg-[#E8A33D] hover:bg-[#d49232] text-[#1A1410] font-medium px-6 py-3 rounded-sm transition-colors text-sm shadow-lg cursor-pointer"
                  >
                    <span>Explore Culinary Menu</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="divide-y divide-[#3D2E24]/60">
                    {cart.map(({ item, quantity }) => (
                      <div key={item.id} className="py-4 flex items-center gap-4 group">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-sm border border-[#3D2E24] shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-base text-[#F5EDE4] truncate">{item.name}</h4>
                          <p className="text-xs text-[#E8A33D] font-medium mt-0.5">{item.price}</p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 bg-[#2A1F18] border border-[#3D2E24] rounded-sm p-1">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 hover:bg-[#3D2E24] text-[#F5EDE4] rounded-sm transition-colors cursor-pointer"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-xs font-bold text-[#F5EDE4] px-2 min-w-[20px] text-center">
                            {quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 hover:bg-[#3D2E24] text-[#F5EDE4] rounded-sm transition-colors cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="text-right min-w-[80px]">
                          <span className="font-serif text-sm font-semibold text-[#F5EDE4] block">
                            {formatPrice(item.numericPrice * quantity)}
                          </span>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-[11px] text-rose-400 hover:text-rose-300 flex items-center gap-1 justify-end mt-1 cursor-pointer"
                          >
                            <Trash2 className="w-3 h-3" />
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Summary Box */}
                  <div className="mt-6 p-4 bg-[#2A1F18] border border-[#3D2E24] rounded-sm space-y-2 text-sm">
                    <div className="flex justify-between text-[#8A7A6A]">
                      <span>Subtotal ({cart.reduce((a, c) => a + c.quantity, 0)} items)</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-[#8A7A6A]">
                      <span>Delivery Fee</span>
                      <span>{formData.orderType === 'delivery' ? '₦1,500' : 'Free (Pickup)'}</span>
                    </div>
                    <div className="pt-2 border-t border-[#3D2E24] flex justify-between font-serif text-lg font-bold text-[#F5EDE4]">
                      <span>Order Total</span>
                      <span className="text-[#E8A33D]">{formatPrice(grandTotal)}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STEP 2: CUSTOMER DETAILS */}
          {step === 2 && (
            <form id="order-details-form" onSubmit={handleProceedToPayment} className="space-y-4">
              {/* Order Type Toggle */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#8A7A6A] font-medium mb-2">
                  Select Order Fulfillment
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, orderType: 'delivery' })}
                    className={`p-3.5 border rounded-sm flex items-center justify-center gap-2 text-sm font-medium transition-all cursor-pointer ${
                      formData.orderType === 'delivery'
                        ? 'bg-[#E8A33D]/10 border-[#E8A33D] text-[#E8A33D]'
                        : 'bg-[#2A1F18] border-[#3D2E24] text-[#8A7A6A] hover:text-[#F5EDE4]'
                    }`}
                  >
                    <Truck className="w-4 h-4" />
                    <span>Doorstep Delivery (₦1,500)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, orderType: 'pickup' })}
                    className={`p-3.5 border rounded-sm flex items-center justify-center gap-2 text-sm font-medium transition-all cursor-pointer ${
                      formData.orderType === 'pickup'
                        ? 'bg-[#E8A33D]/10 border-[#E8A33D] text-[#E8A33D]'
                        : 'bg-[#2A1F18] border-[#3D2E24] text-[#8A7A6A] hover:text-[#F5EDE4]'
                    }`}
                  >
                    <Store className="w-4 h-4" />
                    <span>Restaurant Pickup (Free)</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#8A7A6A] font-medium mb-1.5">
                  Full Name <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Abiodun Samuel"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#2A1F18] border border-[#3D2E24] focus:border-[#E8A33D] focus:outline-none px-4 py-3 rounded-sm text-sm text-[#F5EDE4]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8A7A6A] font-medium mb-1.5">
                    WhatsApp / Phone <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 907 807 6906"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#2A1F18] border border-[#3D2E24] focus:border-[#E8A33D] focus:outline-none px-4 py-3 rounded-sm text-sm text-[#F5EDE4]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8A7A6A] font-medium mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="abiodunsamuel112@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#2A1F18] border border-[#3D2E24] focus:border-[#E8A33D] focus:outline-none px-4 py-3 rounded-sm text-sm text-[#F5EDE4]"
                  />
                </div>
              </div>

              {formData.orderType === 'delivery' && (
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8A7A6A] font-medium mb-1.5">
                    Delivery Address <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    rows={2}
                    required
                    placeholder="Provide your complete house or office address in Lagos..."
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-[#2A1F18] border border-[#3D2E24] focus:border-[#E8A33D] focus:outline-none px-4 py-2.5 rounded-sm text-sm text-[#F5EDE4] resize-none"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#8A7A6A] font-medium mb-1.5">
                  Special Kitchen Notes (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mild pepper level, extra napkins, cutlery required..."
                  value={formData.specialNotes}
                  onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                  className="w-full bg-[#2A1F18] border border-[#3D2E24] focus:border-[#E8A33D] focus:outline-none px-4 py-3 rounded-sm text-sm text-[#F5EDE4]"
                />
              </div>
            </form>
          )}

          {/* STEP 3: DIRECT OPAY BANK TRANSFER PAYMENT */}
          {step === 3 && (
            <div className="space-y-6">
              {/* Payment Highlight Box */}
              <div className="p-5 bg-[#2A1F18] border-2 border-[#E8A33D]/80 rounded-sm shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-[#3D2E24] pb-3">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[#E8A33D]" />
                    <span className="font-serif text-lg font-bold text-[#F5EDE4]">Direct Bank Transfer</span>
                  </div>
                  <span className="bg-emerald-950 text-emerald-300 border border-emerald-800 text-[11px] font-medium px-2.5 py-0.5 rounded-full">
                    Instant Opay Confirmation
                  </span>
                </div>

                <p className="text-xs text-[#8A7A6A] leading-relaxed font-light">
                  Transfer the exact amount of <strong className="text-[#E8A33D] font-bold">{formatPrice(grandTotal)}</strong> to the verified restaurant account below:
                </p>

                {/* Account Details Card */}
                <div className="bg-[#1A1410] border border-[#3D2E24] p-4 rounded-sm space-y-3 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase text-[#8A7A6A] font-medium">Bank Name:</span>
                    <span className="font-serif text-base font-bold text-[#F5EDE4]">Opay Bank</span>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#3D2E24]/60">
                    <span className="text-xs uppercase text-[#8A7A6A] font-medium">Account Number:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xl sm:text-2xl font-bold tracking-widest text-[#E8A33D]">
                        9078076906
                      </span>
                      <button
                        onClick={handleCopyAccount}
                        className="bg-[#2A1F18] hover:bg-[#3D2E24] text-[#E8A33D] border border-[#3D2E24] p-1.5 rounded-sm transition-colors cursor-pointer flex items-center gap-1 text-xs"
                        title="Copy Account Number"
                      >
                        {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                        <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#3D2E24]/60">
                    <span className="text-xs uppercase text-[#8A7A6A] font-medium">Account Name:</span>
                    <span className="font-sans text-sm font-semibold text-[#F5EDE4]">Abiodun Samuel</span>
                  </div>
                </div>

                {copied && (
                  <div className="bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs px-3 py-2 rounded-sm text-center animate-fade-in">
                    ✓ Account Number (9078076906) copied to clipboard!
                  </div>
                )}
              </div>

              {/* Order Total Breakdown */}
              <div className="p-4 bg-[#2A1F18] border border-[#3D2E24] rounded-sm space-y-2 text-xs">
                <div className="flex justify-between text-[#8A7A6A]">
                  <span>Customer:</span>
                  <span className="text-[#F5EDE4] font-medium">{formData.fullName} ({formData.phone})</span>
                </div>
                <div className="flex justify-between text-[#8A7A6A]">
                  <span>Fulfillment:</span>
                  <span className="text-[#F5EDE4] uppercase">{formData.orderType}</span>
                </div>
                <div className="flex justify-between text-[#8A7A6A]">
                  <span>Amount to Transfer:</span>
                  <span className="text-[#E8A33D] font-bold text-sm">{formatPrice(grandTotal)}</span>
                </div>
              </div>

              <p className="text-xs text-center text-[#8A7A6A] font-light">
                Once you have completed the bank transfer via your mobile banking app or USSD, click <span className="text-[#F5EDE4] font-medium">"I Have Made Payment"</span> below.
              </p>
            </div>
          )}

          {/* STEP 4: DIGITAL RECEIPT & CONFIRMATION */}
          {step === 4 && (
            <div className="py-2 space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-600 flex items-center justify-center text-emerald-400 mx-auto shadow-lg mb-3">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <span className="inline-block bg-[#E8A33D]/10 border border-[#E8A33D]/30 text-[#E8A33D] text-xs font-mono font-bold px-3 py-1 rounded-full mb-2">
                  OFFICIAL RECEIPT: #{orderRef}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5EDE4] font-normal">
                  Payment Transfer Registered
                </h3>
                <p className="text-xs sm:text-sm text-[#8A7A6A] max-w-md mx-auto font-light mt-1">
                  Thank you, <strong className="text-[#F5EDE4]">{formData.fullName}</strong>. Below is your official digital receipt for this transaction.
                </p>
              </div>

              {/* Styled Digital Receipt Card */}
              <div id="digital-receipt-card" className="bg-[#140F0C] border-2 border-[#E8A33D]/60 rounded-sm p-5 shadow-2xl relative space-y-4">
                {/* Receipt Header Badge */}
                <div className="flex items-center justify-between border-b border-[#3D2E24] pb-3">
                  <div>
                    <span className="font-serif text-xl font-bold tracking-widest text-[#F5EDE4] block">À Y Ọ̀</span>
                    <span className="text-[10px] text-[#8A7A6A] uppercase tracking-wider block">Contemporary Nigerian Dining</span>
                  </div>
                  <div className="text-right">
                    <span className="bg-emerald-900/60 border border-emerald-600/60 text-emerald-300 text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider uppercase inline-block">
                      ✓ Paid & Verified
                    </span>
                    <span className="text-[10px] text-[#8A7A6A] block mt-1 font-mono">
                      {new Date().toLocaleDateString('en-NG', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                </div>

                {/* Customer & Fulfillment Info Grid */}
                <div className="grid grid-cols-2 gap-3 text-xs bg-[#2A1F18]/60 p-3 rounded-sm border border-[#3D2E24]/60">
                  <div>
                    <span className="text-[10px] uppercase text-[#8A7A6A] block">Customer</span>
                    <span className="font-medium text-[#F5EDE4]">{formData.fullName}</span>
                    <span className="text-[11px] text-[#8A7A6A] block">{formData.phone}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#8A7A6A] block">Fulfillment</span>
                    <span className="font-medium text-[#E8A33D] uppercase">{formData.orderType}</span>
                    {formData.orderType === 'delivery' && (
                      <span className="text-[11px] text-[#8A7A6A] block truncate">{formData.address}</span>
                    )}
                  </div>
                </div>

                {/* Ordered Items Table */}
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between border-b border-[#3D2E24] pb-1.5 text-[11px] text-[#8A7A6A] uppercase font-medium">
                    <span>Item</span>
                    <span>Amount</span>
                  </div>

                  {cart.map(({ item, quantity }) => (
                    <div key={item.id} className="flex justify-between text-[#F5EDE4]">
                      <span className="font-light">{quantity}x {item.name}</span>
                      <span className="font-mono font-medium">{formatPrice(item.numericPrice * quantity)}</span>
                    </div>
                  ))}

                  <div className="pt-3 border-t border-[#3D2E24] space-y-1 text-xs">
                    <div className="flex justify-between text-[#8A7A6A]">
                      <span>Subtotal</span>
                      <span className="font-mono">{formatPrice(subtotal)}</span>
                    </div>
                    {deliveryFee > 0 && (
                      <div className="flex justify-between text-[#8A7A6A]">
                        <span>Delivery Fee</span>
                        <span className="font-mono">{formatPrice(deliveryFee)}</span>
                      </div>
                    )}
                    <div className="flex justify-between font-serif text-base font-bold text-[#F5EDE4] pt-2 border-t border-[#3D2E24]">
                      <span>Total Amount Paid</span>
                      <span className="text-[#E8A33D] font-mono">{formatPrice(grandTotal)}</span>
                    </div>
                  </div>
                </div>

                {/* Bank Details Footer Stamp */}
                <div className="pt-2 border-t border-[#3D2E24]/60 text-[10px] text-[#8A7A6A] flex justify-between items-center">
                  <span>Paid to: Opay Bank (9078076906 - Abiodun Samuel)</span>
                  <span className="font-mono text-[#E8A33D]">Ref: #{orderRef}</span>
                </div>
              </div>

              {receiptCopied && (
                <div className="bg-emerald-950/80 border border-emerald-600 text-emerald-300 text-xs py-2 px-4 rounded-sm text-center animate-fade-in">
                  ✓ Digital receipt copied to clipboard!
                </div>
              )}

              {/* Download, Share, Print & WhatsApp Buttons */}
              <div className="space-y-2.5">
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={handleDownloadReceipt}
                    className="bg-[#2A1F18] hover:bg-[#3D2E24] text-[#F5EDE4] border border-[#3D2E24] hover:border-[#E8A33D] font-medium py-2.5 px-3 rounded-sm transition-all text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                    title="Download Receipt Text File"
                  >
                    <Download className="w-3.5 h-3.5 text-[#E8A33D]" />
                    <span>Download</span>
                  </button>

                  <button
                    onClick={handlePrintReceipt}
                    className="bg-[#2A1F18] hover:bg-[#3D2E24] text-[#F5EDE4] border border-[#3D2E24] hover:border-[#E8A33D] font-medium py-2.5 px-3 rounded-sm transition-all text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                    title="Print Receipt or Save as PDF"
                  >
                    <Printer className="w-3.5 h-3.5 text-[#E8A33D]" />
                    <span>Print / PDF</span>
                  </button>

                  <button
                    onClick={handleShareReceipt}
                    className="bg-[#2A1F18] hover:bg-[#3D2E24] text-[#F5EDE4] border border-[#3D2E24] hover:border-[#E8A33D] font-medium py-2.5 px-3 rounded-sm transition-all text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                    title="Share Digital Receipt"
                  >
                    <Share2 className="w-3.5 h-3.5 text-[#E8A33D]" />
                    <span>Share</span>
                  </button>
                </div>

                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3 px-6 rounded-sm transition-all text-sm shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Receipt & Order to Kitchen via WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    onClearCart();
                    onClose();
                    setStep(1);
                  }}
                  className="w-full bg-[#1A1410] hover:bg-[#2A1F18] text-[#8A7A6A] hover:text-[#F5EDE4] border border-[#3D2E24] font-medium py-2.5 px-6 rounded-sm transition-colors text-xs cursor-pointer mt-2"
                >
                  Close & Done
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        {step < 4 && cart.length > 0 && (
          <div className="p-4 bg-[#2A1F18] border-t border-[#3D2E24] flex items-center justify-between gap-4 shrink-0">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((s) => (s - 1) as any)}
                className="inline-flex items-center gap-1.5 text-xs text-[#8A7A6A] hover:text-[#F5EDE4] px-3 py-2 border border-[#3D2E24] rounded-sm transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={onClearCart}
                className="text-xs text-rose-400 hover:text-rose-300 transition-colors cursor-pointer"
              >
                Clear Cart
              </button>
            )}

            {step === 1 && (
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-2 bg-[#E8A33D] hover:bg-[#d49232] text-[#1A1410] font-medium px-6 py-3 rounded-sm transition-colors text-sm shadow-lg cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            {step === 2 && (
              <button
                type="submit"
                form="order-details-form"
                className="inline-flex items-center gap-2 bg-[#E8A33D] hover:bg-[#d49232] text-[#1A1410] font-medium px-6 py-3 rounded-sm transition-colors text-sm shadow-lg cursor-pointer"
              >
                <span>Proceed to Payment</span>
                <CreditCard className="w-4 h-4" />
              </button>
            )}

            {step === 3 && (
              <button
                type="button"
                onClick={handleCompleteOrder}
                className="inline-flex items-center gap-2 bg-[#E8A33D] hover:bg-[#d49232] text-[#1A1410] font-medium px-6 py-3 rounded-sm transition-colors text-sm shadow-lg cursor-pointer"
              >
                <Check className="w-4 h-4" />
                <span>I Have Made Payment</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
