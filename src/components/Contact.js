function Contact() {
  return (
    <div id="contact"
    className="py-20 text-center 
    bg-gray-50">
    <div className="py-20 text-center bg-gray-50">
      <h2 className="text-4xl font-bold mb-6">Contact Us</h2>

      <p className="text-lg mb-2">📞 9852752144</p>
      <p className="text-lg mb-2">📞 7858075494</p>
      <p className="text-gray-600 mb-6">
        📍 Hira Singh Market, Sonpur, Bihar
      </p>

      <a
        href="tel:9852752144"
        className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-500"
      >
        Call Now
      </a>
    </div>
    </div>
  );
}

export default Contact;