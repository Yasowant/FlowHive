const CTASection = () => {
  return (
    <div className="bg-blue-100 py-16 px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
        Don't wait another day!
      </h2>
      <p className="text-gray-600 mb-6">
        FlowHive gives unlimited storage for any number of projects to your
        whole team for free.
      </p>
      <div className="flex justify-center gap-4">
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition">
          Sign Up. It&apos;s Free
        </button>
      </div>
      <p className="mt-4 text-gray-500">
        Already have an account?{' '}
        <a href="#" className="text-blue-500 hover:underline">
          Login to FlowHive
        </a>
      </p>
    </div>
  );
};

export default CTASection;
