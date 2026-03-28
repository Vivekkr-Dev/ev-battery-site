import { FaBatteryFull, FaTools, FaRecycle, FaBolt } from "react-icons/fa";

function Services() {
  const services = [
    { name: "Battery Diagnostic", icon: <FaBatteryFull /> },
    { name: "Repair & Replacement", icon: <FaTools /> },
    { name: "Battery Reuse", icon: <FaRecycle /> },
    { name: "Fast Charging Solutions", icon: <FaBolt /> },
  ];

  return (
    <div id="services"
  className="py-20 bg-gray-100
  text-center"> 
    <div className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-12">Our Services</h2>

      <div className="grid md:grid-cols-4 gap-8 px-6">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300"
          >
            <div className="text-green-600 text-4xl mb-4">
              {item.icon}
            </div>
            <h3 className="font-semibold text-lg">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Services;