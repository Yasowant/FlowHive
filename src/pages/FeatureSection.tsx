export default function FeatureSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side (Text + Features) */}
        <div className="space-y-8">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Plan. Discuss. Achieve Goals.{' '}
            <span className="text-blue-500">Succeed.</span>
          </h2>
          <p className="text-gray-600">
            Projects are not just about tasks; every team needs different tools.
            Freedcamp offers everything your team needs to successfully complete
            any project!
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Calendar */}
            <div className="flex items-start space-x-4 bg-white shadow-md p-4 rounded-lg">
              <span className="text-gray-700 text-2xl">📅</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Calendar
                </h4>
                <p className="text-gray-600">
                  See an overview of due items, create events, tasks, and
                  milestones.
                </p>
              </div>
            </div>

            {/* Discussions */}
            <div className="flex items-start space-x-4">
              <span className="text-gray-700 text-2xl">💬</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Discussions
                </h4>
                <p className="text-gray-600">
                  Discuss ideas with your team from one centralized place.
                </p>
              </div>
            </div>

            {/* Milestones */}
            <div className="flex items-start space-x-4">
              <span className="text-gray-700 text-2xl">🏆</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Milestones
                </h4>
                <p className="text-gray-600">
                  Group tasks, set goals, and track progress.
                </p>
              </div>
            </div>

            {/* Wiki */}
            <div className="flex items-start space-x-4">
              <span className="text-gray-700 text-2xl">📖</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Wiki</h4>
                <p className="text-gray-600">
                  Keep documentation and manage multiple versions.
                </p>
              </div>
            </div>

            {/* Issue Tracker */}
            <div className="flex items-start space-x-4">
              <span className="text-gray-700 text-2xl">🚨</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Issue Tracker
                </h4>
                <p className="text-gray-600">
                  Track issues and resolve them efficiently.
                </p>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-start space-x-4">
              <span className="text-gray-700 text-2xl">⏰</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Time</h4>
                <p className="text-gray-600">
                  Track work hours and improve productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
