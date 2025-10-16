import { DASHBOARD_DATA } from '@/constants/dashboardData';

const Card = ({ children, className = '' }) => (
  <div
    className={`p-6 rounded-2xl bg-white/5 border border-[#1E90FF]/20 shadow-xl backdrop-blur-sm ${className}`}
  >
    {children}
  </div>
);

/**
 * 4. MockLineChart Component
 * Simulates a bar chart tracking monthly application/interaction momentum
 */
export const MockLineChart = () => {
  // Determine the max value for scaling the bars/dots
  const maxValue = Math.max(...DASHBOARD_DATA.chartData.map((d) => d.value));

  // Convert value to percentage height
  const getBarHeight = (value) => `${(value / maxValue) * 80 + 20}%`; // 20% minimum height for visibility

  return (
    <Card className="col-span-1 lg:col-span-2 h-96 flex flex-col">
      <h3 className="text-xl font-semibold text-white mb-6">Monthly Application Momentum</h3>
      <div className="flex-grow flex items-end justify-around h-full p-4">
        {DASHBOARD_DATA.chartData.map((data, index) => (
          <div key={index} className="flex flex-col items-center w-1/6 h-full justify-end">
            <div
              className="w-full rounded-t-lg bg-[#1E90FF]/50 transition-all duration-700 ease-out relative hover:bg-[#1E90FF]"
              style={{ height: getBarHeight(data.value) }}
              title={`Applications: ${data.value}`}
            >
              {/* Dot indicator */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-[#1E90FF] -mt-1 ring-2 ring-white/10"></div>
            </div>
            <span className="text-sm text-white/70 mt-2">{data.name}</span>
          </div>
        ))}
      </div>
      <div className="text-sm text-white/50 text-center mt-4">
        (Simulated Application & Interview Interactions)
      </div>
    </Card>
  );
};
