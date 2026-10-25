import React, { useState } from 'react';
import { Mail, Check, Sparkles, Send } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address (e.g. florist@garden.com)');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 600);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#F7F5F0] border-t border-[#D2D2D2]/30 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#807CFC] font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Atelier Dispatch</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl text-[#333333] tracking-tight">
          A Little Bloom in Your Inbox.
        </h2>

        <p className="text-[#526E7A] text-sm sm:text-base max-w-xl mx-auto mt-3 leading-relaxed [text-wrap:balance]">
          Discover seasonal flowers, thoughtful gifting ideas, and special offers. Receive 10% off your first handcrafted bouquet.
        </p>

        {status === 'success' ? (
          <div className="mt-8 p-6 bg-white rounded-2xl max-w-md mx-auto border border-emerald-200 shadow-xs flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
              <Check className="w-5 h-5" />
            </div>
            <p className="font-serif text-lg text-[#333333]">Welcome to the Bloom Club</p>
            <p className="text-xs text-[#526E7A]">
              We've sent a demonstration welcome note to your email with your 10% seasonal code: <span className="font-mono font-semibold text-[#807CFC]">BLOOM10</span>.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-3 text-xs text-[#333333] underline hover:text-[#807CFC]"
            >
              Subscribe another email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2.5">
              <div className="relative flex-grow">
                <Mail className="w-4 h-4 text-[#526E7A] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Enter your email address..."
                  className="w-full pl-10 pr-4 py-3 bg-white text-xs text-[#333333] rounded-full border border-[#D2D2D2] focus:border-[#807CFC] focus:outline-hidden placeholder:text-[#526E7A]/60 shadow-xs"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 bg-[#333333] text-white text-xs font-semibold rounded-full hover:bg-black transition-all shadow-xs shrink-0 flex items-center justify-center gap-1.5 disabled:opacity-50"
              >
                <span>{status === 'loading' ? 'Joining...' : 'Subscribe'}</span>
                <Send className="w-3 h-3 text-[#C2A3FF]" />
              </button>
            </div>

            {status === 'error' && (
              <p className="text-xs text-rose-600 mt-2 text-left sm:text-center">
                {errorMessage}
              </p>
            )}

            <p className="text-[11px] text-[#526E7A]/80 mt-3">
              We respect your inbox. Unsubscribe anytime. No spam ever.
            </p>
          </form>
        )}

      </div>
    </section>
  );
};
