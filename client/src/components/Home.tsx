
import React from "react";

const HomeComponent : React.FC =() => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header Section */}
      <header className="bg-green-700 text-white py-8 shadow-lg">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Value Investing Academy
          </h1>
          <p className="mt-4 text-xl">
            Master the principles of value investing like Warren Buffett
          </p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">What is Value Investing?</h2>
          <p className="text-lg leading-relaxed">
            Value investing is a long-term investment strategy where investors
            seek out stocks that are trading below their intrinsic value. This
            approach is rooted in the belief that the market overreacts to good
            and bad news, resulting in stock price movements that do not
            correspond to a company's long-term fundamentals. By buying stocks
            when they are undervalued and holding them until their price
            increases to reflect their true worth, value investors aim to make
            substantial gains.
          </p>
        </div>
      </section>

      {/* Warren Buffett Section */}
      <section className="bg-white py-16 shadow-md">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Warren Buffett's Approach
          </h2>
          <p className="text-lg leading-relaxed">
            Warren Buffett, often considered the greatest investor of all time,
            follows the value investing philosophy. He meticulously researches
            companies to ensure they have strong fundamentals, such as a robust
            balance sheet, consistent earnings growth, and a competitive
            advantage in their industry. Buffett emphasizes the importance of a
            "margin of safety" when purchasing stocks, meaning he buys at a
            price that is significantly below the company's intrinsic value.
            This strategy allows for potential profit while minimizing risk.
          </p>
        </div>
      </section>

      {/* Stock Valuation Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Understanding Stock Valuation</h2>
          <p className="text-lg leading-relaxed mb-6">
            Stock valuation is a critical component of value investing. The goal
            is to determine a company's intrinsic value, or its true worth, based
            on fundamental analysis. This involves assessing various financial
            metrics, including earnings, revenue, dividends, and cash flow. 
            Common valuation techniques include:
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>
              <strong>Price-to-Earnings (P/E) Ratio:</strong> This ratio compares
              a company's share price to its earnings per share, helping investors
              gauge whether a stock is over or undervalued relative to its earnings.
            </li>
            <li>
              <strong>Discounted Cash Flow (DCF) Analysis:</strong> DCF estimates
              a company's intrinsic value by projecting future cash flows and
              discounting them back to the present value.
            </li>
            <li>
              <strong>Price-to-Book (P/B) Ratio:</strong> The P/B ratio compares
              a company's market value to its book value, indicating whether the
              stock is valued fairly based on its net assets.
            </li>
          </ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-green-700 py-16 text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Value Investing Journey Today
          </h2>
          <p className="text-lg leading-relaxed mb-8">
            Join our community to learn how to invest like Warren Buffett. Gain
            access to expert resources, step-by-step tutorials, and tools that
            will help you become a successful value investor.
          </p>
          <button className="bg-white text-green-700 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Value Investing Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomeComponent;
