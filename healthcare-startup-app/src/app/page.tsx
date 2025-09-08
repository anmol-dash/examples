'use client'

import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('mediProcure')

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600">
                  Healthcare AI Platform
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString()}
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">AI</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('mediProcure')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'mediProcure'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              MediProcure AI
            </button>
            <button
              onClick={() => setActiveTab('sentriaHealth')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'sentriaHealth'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Sentria Health
            </button>
            <button
              onClick={() => setActiveTab('calendar')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'calendar'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Calendar & Orders
            </button>
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'mediProcure' && <MediProcureDashboard />}
        {activeTab === 'sentriaHealth' && <SentriaHealthDashboard />}
        {activeTab === 'calendar' && <CalendarDashboard />}
      </div>
    </main>
  )
}

function MediProcureDashboard() {
  return (
    <>
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-sm">💰</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Monthly Savings
              </p>
              <p className="text-2xl font-semibold text-gray-900">$2.4M</p>
              <p className="text-sm text-green-600">+12.5% vs last month</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm">🏥</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Active Hospitals
              </p>
              <p className="text-2xl font-semibold text-gray-900">47</p>
              <p className="text-sm text-blue-600">+3 this month</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 text-sm">🔄</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Exchanges This Month
              </p>
              <p className="text-2xl font-semibold text-gray-900">1,247</p>
              <p className="text-sm text-purple-600">+8.2% efficiency</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 text-sm">⚡</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                AI Optimizations
              </p>
              <p className="text-2xl font-semibold text-gray-900">89%</p>
              <p className="text-sm text-orange-600">Success rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Data Visualization */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Expenditure Trend Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Monthly Expenditure Trends
          </h3>
          <div className="h-64 flex items-end justify-between space-x-2 px-4">
            {[65, 72, 58, 45, 38, 42, 35, 28, 32, 25, 22, 18].map(
              (height, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div
                    className="bg-blue-500 rounded-t w-full max-w-8 transition-all duration-300 hover:bg-blue-600 cursor-pointer"
                    style={{ height: `${height}%`, minHeight: '20px' }}
                    title={`${
                      [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec',
                      ][index]
                    }: $${(100 - height) * 10000}K`}
                  ></div>
                  <span className="text-xs text-gray-500 mt-2 text-center">
                    {
                      [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec',
                      ][index]
                    }
                  </span>
                </div>
              )
            )}
          </div>
          <div className="mt-4 flex justify-between text-sm text-gray-600">
            <span>High: $720K</span>
            <span>Low: $180K</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            AI-driven procurement optimization reduced costs by 72% over 12
            months
          </p>
        </div>

        {/* Procurement Categories */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Procurement Categories
          </h3>
          <div className="space-y-4">
            {[
              {
                name: 'Medical Devices',
                percentage: 35,
                color: 'bg-blue-500',
                amount: '$1.2M',
              },
              {
                name: 'Pharmaceuticals',
                percentage: 28,
                color: 'bg-green-500',
                amount: '$980K',
              },
              {
                name: 'Surgical Equipment',
                percentage: 20,
                color: 'bg-purple-500',
                amount: '$700K',
              },
              {
                name: 'Diagnostic Tools',
                percentage: 12,
                color: 'bg-orange-500',
                amount: '$420K',
              },
              {
                name: 'Other Supplies',
                percentage: 5,
                color: 'bg-gray-500',
                amount: '$175K',
              },
            ].map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className={`w-3 h-3 ${category.color} rounded-full mr-3`}
                  ></div>
                  <span className="text-sm font-medium text-gray-700">
                    {category.name}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 ${category.color} rounded-full`}
                      style={{ width: `${category.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-16 text-right">
                    {category.amount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Procurement Data Table */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Procurement Transactions
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hospital
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Unit Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Savings
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                {
                  hospital: 'Mayo Clinic',
                  item: 'MRI Scanner',
                  category: 'Medical Devices',
                  quantity: 2,
                  unitPrice: '$1,200,000',
                  total: '$2,400,000',
                  savings: '$180,000',
                  status: 'Completed',
                },
                {
                  hospital: 'Johns Hopkins',
                  item: 'Ventilators',
                  category: 'Critical Care',
                  quantity: 15,
                  unitPrice: '$45,000',
                  total: '$675,000',
                  savings: '$67,500',
                  status: 'In Transit',
                },
                {
                  hospital: 'Cleveland Clinic',
                  item: 'Surgical Gloves',
                  category: 'Supplies',
                  quantity: 10000,
                  unitPrice: '$0.85',
                  total: '$8,500',
                  savings: '$1,275',
                  status: 'Completed',
                },
                {
                  hospital: 'Mass General',
                  item: 'CT Scanner',
                  category: 'Medical Devices',
                  quantity: 1,
                  unitPrice: '$850,000',
                  total: '$850,000',
                  savings: '$127,500',
                  status: 'Processing',
                },
                {
                  hospital: 'UCLA Medical',
                  item: 'Insulin Pens',
                  category: 'Pharmaceuticals',
                  quantity: 5000,
                  unitPrice: '$12.50',
                  total: '$62,500',
                  savings: '$9,375',
                  status: 'Completed',
                },
                {
                  hospital: 'Mount Sinai',
                  item: 'Defibrillators',
                  category: 'Emergency Care',
                  quantity: 8,
                  unitPrice: '$15,000',
                  total: '$120,000',
                  savings: '$18,000',
                  status: 'Completed',
                },
                {
                  hospital: 'Stanford Health',
                  item: 'Ultrasound Machines',
                  category: 'Diagnostic',
                  quantity: 5,
                  unitPrice: '$75,000',
                  total: '$375,000',
                  savings: '$56,250',
                  status: 'In Transit',
                },
                {
                  hospital: 'Duke Health',
                  item: 'Surgical Masks',
                  category: 'PPE',
                  quantity: 50000,
                  unitPrice: '$0.25',
                  total: '$12,500',
                  savings: '$1,875',
                  status: 'Completed',
                },
              ].map((transaction, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {transaction.hospital}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.item}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.quantity.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.unitPrice}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {transaction.total}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                    {transaction.savings}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        transaction.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : transaction.status === 'In Transit'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Hospital Exchange Network */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Hospital Exchange Network
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                name: 'Mayo Clinic',
                location: 'Rochester, MN',
                exchanges: 156,
                savings: '$45K',
              },
              {
                name: 'Johns Hopkins',
                location: 'Baltimore, MD',
                exchanges: 142,
                savings: '$38K',
              },
              {
                name: 'Cleveland Clinic',
                location: 'Cleveland, OH',
                exchanges: 134,
                savings: '$42K',
              },
              {
                name: 'Mass General',
                location: 'Boston, MA',
                exchanges: 128,
                savings: '$35K',
              },
              {
                name: 'UCLA Medical',
                location: 'Los Angeles, CA',
                exchanges: 119,
                savings: '$41K',
              },
              {
                name: 'Mount Sinai',
                location: 'New York, NY',
                exchanges: 112,
                savings: '$33K',
              },
            ].map((hospital, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-gray-900">{hospital.name}</h4>
                <p className="text-sm text-gray-600">{hospital.location}</p>
                <div className="mt-2 flex justify-between text-sm">
                  <span className="text-blue-600">
                    {hospital.exchanges} exchanges
                  </span>
                  <span className="text-green-600 font-medium">
                    {hospital.savings} saved
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            AI Recommendations
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <p className="text-sm font-medium text-gray-900">
                Optimize MRI Contracts
              </p>
              <p className="text-xs text-gray-600">
                Potential savings: $120K/month
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="text-sm font-medium text-gray-900">
                Bulk Purchase Opportunity
              </p>
              <p className="text-xs text-gray-600">
                Surgical gloves - 15% discount
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <p className="text-sm font-medium text-gray-900">
                Exchange Alert
              </p>
              <p className="text-xs text-gray-600">
                3 hospitals need ventilators
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <p className="text-sm font-medium text-gray-900">
                Price Drop Detected
              </p>
              <p className="text-xs text-gray-600">
                CT scanners - 8% reduction
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Recent AI Activity
        </h3>
        <div className="space-y-3">
          {[
            {
              action: "Optimized procurement for St. Mary's Hospital",
              time: '2 minutes ago',
              type: 'optimization',
            },
            {
              action: 'Facilitated ventilator exchange between 3 hospitals',
              time: '15 minutes ago',
              type: 'exchange',
            },
            {
              action: 'Identified 23% cost reduction in pharmaceutical orders',
              time: '1 hour ago',
              type: 'savings',
            },
            {
              action: 'Updated pricing for medical device contracts',
              time: '2 hours ago',
              type: 'update',
            },
            {
              action: 'Processed 47 new procurement requests',
              time: '3 hours ago',
              type: 'processing',
            },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
            >
              <div className="flex items-center">
                <div
                  className={`w-2 h-2 rounded-full mr-3 ${
                    activity.type === 'optimization'
                      ? 'bg-green-500'
                      : activity.type === 'exchange'
                      ? 'bg-blue-500'
                      : activity.type === 'savings'
                      ? 'bg-purple-500'
                      : activity.type === 'update'
                      ? 'bg-orange-500'
                      : 'bg-gray-500'
                  }`}
                ></div>
                <span className="text-sm text-gray-700">{activity.action}</span>
              </div>
              <span className="text-xs text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

function SentriaHealthDashboard() {
  return (
    <>
      {/* Sentria Health Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Sentria Health
        </h2>
        <p className="text-lg text-gray-600">
          Macro Trends & Market Intelligence for Healthcare Procurement
        </p>
      </div>

      {/* Time Period Selector */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            Analysis Period
          </h3>
          <div className="flex space-x-2">
            {['1Y', '3Y', '5Y', '10Y'].map((period) => (
              <button
                key={period}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  period === '3Y'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Macro Trend Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 text-sm">📈</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Market Growth</p>
              <p className="text-2xl font-semibold text-gray-900">+8.3%</p>
              <p className="text-sm text-red-600">Annual CAGR</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 text-sm">💊</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Drug Price Index
              </p>
              <p className="text-2xl font-semibold text-gray-900">142.7</p>
              <p className="text-sm text-yellow-600">+5.2% vs last year</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-600 text-sm">🏭</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Supply Chain Risk
              </p>
              <p className="text-2xl font-semibold text-gray-900">Medium</p>
              <p className="text-sm text-indigo-600">Stable conditions</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-teal-600 text-sm">🌍</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Global Market Size
              </p>
              <p className="text-2xl font-semibold text-gray-900">$4.2T</p>
              <p className="text-sm text-teal-600">Healthcare spending</p>
            </div>
          </div>
        </div>
      </div>

      {/* Macro Trend Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Healthcare Spending Trend */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Global Healthcare Spending Trend (20 Years)
          </h3>
          <div className="h-64 flex items-end justify-between space-x-1 px-2">
            {[
              45, 52, 48, 55, 62, 58, 65, 68, 72, 75, 78, 82, 85, 88, 92, 95,
              98, 102, 105, 108,
            ].map((height, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div
                  className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t w-full max-w-3 transition-all duration-300 hover:from-blue-600 hover:to-blue-500 cursor-pointer"
                  style={{ height: `${height}%`, minHeight: '15px' }}
                  title={`Year ${2004 + index}: $${(height * 50).toFixed(0)}B`}
                ></div>
                {index % 5 === 0 && (
                  <span className="text-xs text-gray-500 mt-1 transform -rotate-45 origin-left">
                    {2004 + index}
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between text-sm text-gray-600">
            <span>2004: $2.25T</span>
            <span>2024: $5.4T</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Healthcare spending growing at 6.8% annually, driven by aging
            population and technology adoption
          </p>
        </div>

        {/* Regional Market Share */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Regional Market Share
          </h3>
          <div className="space-y-4">
            {[
              {
                name: 'North America',
                percentage: 42,
                color: 'bg-blue-500',
                amount: '$1.76T',
              },
              {
                name: 'Europe',
                percentage: 28,
                color: 'bg-green-500',
                amount: '$1.18T',
              },
              {
                name: 'Asia Pacific',
                percentage: 18,
                color: 'bg-purple-500',
                amount: '$756B',
              },
              {
                name: 'Latin America',
                percentage: 7,
                color: 'bg-orange-500',
                amount: '$294B',
              },
              {
                name: 'Middle East & Africa',
                percentage: 5,
                color: 'bg-gray-500',
                amount: '$210B',
              },
            ].map((region, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className={`w-3 h-3 ${region.color} rounded-full mr-3`}
                  ></div>
                  <span className="text-sm font-medium text-gray-700">
                    {region.name}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 ${region.color} rounded-full`}
                      style={{ width: `${region.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-16 text-right">
                    {region.amount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Market Intelligence Table */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Market Intelligence & Predictions
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trend
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Impact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Confidence
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timeframe
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action Required
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                {
                  trend: 'Rising Drug Costs',
                  impact: 'High',
                  confidence: '87%',
                  timeframe: 'Q1-Q2 2024',
                  description:
                    'Specialty drugs expected to increase 15-20% annually',
                  action: 'Identify generic alternatives',
                },
                {
                  trend: 'Supply Chain Disruption',
                  impact: 'Medium',
                  confidence: '73%',
                  timeframe: 'Q2 2024',
                  description: 'Medical device shortages expected',
                  action: 'Early procurement planning',
                },
                {
                  trend: 'AI Adoption Acceleration',
                  impact: 'Opportunity',
                  confidence: '94%',
                  timeframe: 'Ongoing',
                  description: 'Healthcare AI market growing 45% annually',
                  action: 'Invest in AI solutions',
                },
                {
                  trend: 'Regulatory Changes',
                  impact: 'Compliance',
                  confidence: '91%',
                  timeframe: 'Q3 2024',
                  description: 'New transparency requirements for drug pricing',
                  action: 'Update compliance systems',
                },
                {
                  trend: 'Telemedicine Growth',
                  impact: 'Medium',
                  confidence: '82%',
                  timeframe: '2024-2025',
                  description: 'Remote care equipment demand increasing',
                  action: 'Expand telemedicine procurement',
                },
                {
                  trend: 'Sustainability Focus',
                  impact: 'Low',
                  confidence: '76%',
                  timeframe: '2025+',
                  description: 'Green procurement requirements emerging',
                  action: 'Develop sustainability metrics',
                },
              ].map((intelligence, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {intelligence.trend}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        intelligence.impact === 'High'
                          ? 'bg-red-100 text-red-800'
                          : intelligence.impact === 'Medium'
                          ? 'bg-yellow-100 text-yellow-800'
                          : intelligence.impact === 'Opportunity'
                          ? 'bg-green-100 text-green-800'
                          : intelligence.impact === 'Compliance'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {intelligence.impact}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {intelligence.confidence}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {intelligence.timeframe}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">
                    {intelligence.description}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">
                    {intelligence.action}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Market Intelligence */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Key Market Indicators
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Inflation Rate</span>
                <span className="text-sm font-medium text-gray-900">3.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Interest Rates</span>
                <span className="text-sm font-medium text-gray-900">5.25%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Unemployment</span>
                <span className="text-sm font-medium text-gray-900">3.8%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">GDP Growth</span>
                <span className="text-sm font-medium text-gray-900">2.1%</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Healthcare CPI</span>
                <span className="text-sm font-medium text-gray-900">4.7%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Pharma R&D Spend</span>
                <span className="text-sm font-medium text-gray-900">$180B</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  Medical Device Market
                </span>
                <span className="text-sm font-medium text-gray-900">$456B</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  AI Healthcare Market
                </span>
                <span className="text-sm font-medium text-gray-900">$45B</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Historical Analysis
          </h3>
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">$2.8B</div>
              <div className="text-sm text-gray-600">
                Total Procurement Volume
              </div>
              <div className="text-xs text-green-600 mt-1">+12% YoY Growth</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">
                $340M
              </div>
              <div className="text-sm text-gray-600">
                Total Savings Achieved
              </div>
              <div className="text-xs text-green-600 mt-1">
                12.1% Cost Reduction
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">
                8,247
              </div>
              <div className="text-sm text-gray-600">Successful Exchanges</div>
              <div className="text-xs text-green-600 mt-1">
                98.3% Success Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function CalendarDashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const currentMonth = selectedDate.getMonth()
  const currentYear = selectedDate.getFullYear()

  // Sample data for drug orders and patient counts
  const calendarData = {
    1: { drugOrders: 12, patients: 45, urgent: 2 },
    3: { drugOrders: 8, patients: 32, urgent: 1 },
    5: { drugOrders: 15, patients: 58, urgent: 3 },
    7: { drugOrders: 6, patients: 28, urgent: 0 },
    9: { drugOrders: 22, patients: 67, urgent: 4 },
    12: { drugOrders: 18, patients: 52, urgent: 2 },
    15: { drugOrders: 11, patients: 41, urgent: 1 },
    18: { drugOrders: 25, patients: 73, urgent: 5 },
    21: { drugOrders: 14, patients: 49, urgent: 2 },
    24: { drugOrders: 9, patients: 35, urgent: 1 },
    27: { drugOrders: 19, patients: 61, urgent: 3 },
    30: { drugOrders: 13, patients: 44, urgent: 2 },
  }

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(selectedDate)
    if (direction === 'prev') {
      newDate.setMonth(currentMonth - 1)
    } else {
      newDate.setMonth(currentMonth + 1)
    }
    setSelectedDate(newDate)
  }

  const getDayData = (day: number) => {
    return (
      calendarData[day as keyof typeof calendarData] || {
        drugOrders: 0,
        patients: 0,
        urgent: 0,
      }
    )
  }

  const getTotalForMonth = () => {
    return Object.values(calendarData).reduce(
      (total, day) => ({
        drugOrders: total.drugOrders + day.drugOrders,
        patients: total.patients + day.patients,
        urgent: total.urgent + day.urgent,
      }),
      { drugOrders: 0, patients: 0, urgent: 0 }
    )
  }

  const monthTotal = getTotalForMonth()

  return (
    <>
      {/* Calendar Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Calendar & Orders
        </h2>
        <p className="text-lg text-gray-600">
          Drug Orders & Patient Counts for {monthNames[currentMonth]}{' '}
          {currentYear}
        </p>
      </div>

      {/* Month Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm">💊</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Total Drug Orders
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                {monthTotal.drugOrders}
              </p>
              <p className="text-sm text-blue-600">This month</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-sm">👥</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Total Patients
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                {monthTotal.patients}
              </p>
              <p className="text-sm text-green-600">This month</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 text-sm">🚨</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Urgent Orders</p>
              <p className="text-2xl font-semibold text-gray-900">
                {monthTotal.urgent}
              </p>
              <p className="text-sm text-red-600">Priority cases</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 text-sm">📊</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Avg Orders/Day
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                {Math.round(monthTotal.drugOrders / 30)}
              </p>
              <p className="text-sm text-purple-600">Daily average</p>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            {monthNames[currentMonth]} {currentYear}
          </h3>
          <div className="flex space-x-2">
            <button
              onClick={() => navigateMonth('prev')}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50"
            >
              ←
            </button>
            <button
              onClick={() => setSelectedDate(new Date())}
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-sm"
            >
              Today
            </button>
            <button
              onClick={() => navigateMonth('next')}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50"
            >
              →
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 mb-4">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div
              key={day}
              className="p-2 text-center text-sm font-medium text-gray-500"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {/* Empty cells for days before the first day of the month */}
          {Array.from({ length: firstDayOfMonth }).map((_, index) => (
            <div
              key={`empty-${index}`}
              className="h-24 border border-gray-200 rounded-lg"
            ></div>
          ))}

          {/* Days of the month */}
          {Array.from({ length: daysInMonth }, (_, index) => {
            const day = index + 1
            const dayData = getDayData(day)
            const isToday =
              day === new Date().getDate() &&
              currentMonth === new Date().getMonth() &&
              currentYear === new Date().getFullYear()

            return (
              <div
                key={day}
                className={`h-24 border border-gray-200 rounded-lg p-2 cursor-pointer hover:bg-gray-50 ${
                  isToday ? 'bg-blue-50 border-blue-300' : ''
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <span
                    className={`text-sm font-medium ${
                      isToday ? 'text-blue-600' : 'text-gray-900'
                    }`}
                  >
                    {day}
                  </span>
                  {dayData.urgent > 0 && (
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  )}
                </div>

                {dayData.drugOrders > 0 && (
                  <div className="space-y-1">
                    <div className="flex items-center text-xs">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
                      <span className="text-gray-600">
                        {dayData.drugOrders} orders
                      </span>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                      <span className="text-gray-600">
                        {dayData.patients} patients
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Legend */}
        <div className="mt-6 flex items-center justify-center space-x-6 text-sm">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
            <span className="text-gray-600">Drug Orders</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
            <span className="text-gray-600">Patients</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
            <span className="text-gray-600">Urgent Orders</span>
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Drug Orders
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Drug Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dosage
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                {
                  date: '2024-01-15',
                  drug: 'Insulin Lispro',
                  patient: 'P-001234',
                  dosage: '10 units',
                  quantity: 5,
                  priority: 'High',
                  status: 'Processing',
                },
                {
                  date: '2024-01-15',
                  drug: 'Metformin',
                  patient: 'P-001235',
                  dosage: '500mg',
                  quantity: 30,
                  priority: 'Normal',
                  status: 'Completed',
                },
                {
                  date: '2024-01-14',
                  drug: 'Atorvastatin',
                  patient: 'P-001236',
                  dosage: '20mg',
                  quantity: 90,
                  priority: 'Normal',
                  status: 'Completed',
                },
                {
                  date: '2024-01-14',
                  drug: 'Lisinopril',
                  patient: 'P-001237',
                  dosage: '10mg',
                  quantity: 30,
                  priority: 'High',
                  status: 'In Transit',
                },
                {
                  date: '2024-01-13',
                  drug: 'Omeprazole',
                  patient: 'P-001238',
                  dosage: '20mg',
                  quantity: 60,
                  priority: 'Normal',
                  status: 'Completed',
                },
                {
                  date: '2024-01-13',
                  drug: 'Warfarin',
                  patient: 'P-001239',
                  dosage: '5mg',
                  quantity: 30,
                  priority: 'Urgent',
                  status: 'Processing',
                },
                {
                  date: '2024-01-12',
                  drug: 'Amlodipine',
                  patient: 'P-001240',
                  dosage: '5mg',
                  quantity: 30,
                  priority: 'Normal',
                  status: 'Completed',
                },
                {
                  date: '2024-01-12',
                  drug: 'Levothyroxine',
                  patient: 'P-001241',
                  dosage: '50mcg',
                  quantity: 90,
                  priority: 'Normal',
                  status: 'Completed',
                },
              ].map((order, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.drug}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.patient}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.dosage}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        order.priority === 'Urgent'
                          ? 'bg-red-100 text-red-800'
                          : order.priority === 'High'
                          ? 'bg-orange-100 text-orange-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {order.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        order.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : order.status === 'Processing'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
