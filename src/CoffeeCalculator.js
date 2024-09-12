import React, { useState } from 'react';

const CoffeeCalculator = () => {
  const [coffeeBeansWeight, setCoffeeBeansWeight] = useState('');
  const [extractedCoffeeWeight, setExtractedCoffeeWeight] = useState('');
  const [tds, setTds] = useState('');
  const [pourWaterWeight, setPourWaterWeight] = useState('');
  const [yieldResult, setYieldResult] = useState('수율: 0.0%');
  const [brewingRatio, setBrewingRatio] = useState('추출 비율: 1:0');
  const [pourRatio, setPourRatio] = useState('푸어 비율: 1:0');

  const calculateYield = () => {
    const beansWeight = parseFloat(coffeeBeansWeight);
    const extractedWeight = parseFloat(extractedCoffeeWeight);
    const tdsValue = parseFloat(tds);
    const waterWeight = parseFloat(pourWaterWeight);

    if (isNaN(beansWeight) || isNaN(extractedWeight) || isNaN(tdsValue) || isNaN(waterWeight)) {
      setYieldResult('올바른 값을 입력하세요.');
      setBrewingRatio('추출 비율: 1:0');
      setPourRatio('푸어 비율: 1:0');
      return;
    }

    const coffeeSolids = extractedWeight * tdsValue / 100;
    const yieldValue = (coffeeSolids / beansWeight) * 100;
    const ratioInteger = Math.round(extractedWeight / beansWeight);
    const pourRatioInteger = Math.round(waterWeight / beansWeight);

    setYieldResult(`수율 : ${yieldValue.toFixed(2)}%`);
    setBrewingRatio(`추출 비율 : 1:${ratioInteger}`);
    setPourRatio(`푸어 비율 : 1:${pourRatioInteger}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-8 transform transition-all hover:shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">☕ 커피 계산기</h2>
          <span className="text-sm text-gray-500">제작: cheshire</span>
        </div>
        <div className="space-y-4">
          <input
            type="number"
            placeholder="원두의 양(g)을 입력하세요"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={coffeeBeansWeight}
            onChange={(e) => setCoffeeBeansWeight(e.target.value)}
          />
          <input
            type="number"
            placeholder="추출된 커피의 무게(g)을 입력하세요"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={extractedCoffeeWeight}
            onChange={(e) => setExtractedCoffeeWeight(e.target.value)}
          />
          <input
            type="number"
            placeholder="TDS(%) 값을 입력하세요"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={tds}
            onChange={(e) => setTds(e.target.value)}
          />
          <input
            type="number"
            placeholder="푸어 물 양(g)을 입력하세요"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={pourWaterWeight}
            onChange={(e) => setPourWaterWeight(e.target.value)}
          />
          <button
            onClick={calculateYield}
            className="w-full bg-indigo-500 text-white p-3 rounded-lg hover:bg-indigo-600 transition duration-300 shadow-md hover:shadow-lg"
          >
            계산하기
          </button>
        </div>
        <div className="text-center mt-6 space-y-4">
          <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg">
            <p className="text-lg font-semibold text-gray-800">{yieldResult}</p>
          </div>
          <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg">
            <p className="text-lg font-semibold text-gray-800">{brewingRatio}</p>
          </div>
          <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg">
            <p className="text-lg font-semibold text-gray-800">{pourRatio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCalculator;
