export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side (Text + Features) */}
        <div className="space-y-8">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Get <em className="text-blue-500">Everything</em> Done
          </h2>
          <p className="text-gray-600">
            FlowHive helps streamline projects, processes, workflows, track
            time, and issues. It's built for high-performance teams.
          </p>

          {/* Features List */}
          <div className="space-y-6">
            {/* Task List */}
            <div className="flex items-start space-x-4">
              <span className="text-blue-500 text-3xl">📋</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Task List
                </h4>
                <p className="text-gray-600">
                  Stay on top of your task lists and stay in touch with what's
                  happening.
                </p>
              </div>
            </div>

            {/* Kanban Board */}
            <div className="flex items-start space-x-4">
              <span className="text-yellow-500 text-3xl">📂</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Kanban Board
                </h4>
                <p className="text-gray-600">
                  Manage tasks by dragging into completion columns.
                </p>
              </div>
            </div>

            {/* Subtasks */}
            <div className="flex items-start space-x-4">
              <span className="text-blue-400 text-3xl">🔖</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Subtasks
                </h4>
                <p className="text-gray-600">
                  Split larger tasks into smaller subtasks.
                </p>
              </div>
            </div>

            {/* Gantt Chart */}
            <div className="flex items-start space-x-4">
              <span className="text-purple-500 text-3xl">📊</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Gantt Chart
                </h4>
                <p className="text-gray-600">
                  Adjust your plans with a bird's-eye view of tasks.
                </p>
              </div>
            </div>

            {/* Tasky */}
            <div className="flex items-start space-x-4">
              <span className="text-red-500 text-3xl">📌</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Tasky</h4>
                <p className="text-gray-600">
                  Keep your personal tasks private.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="flex justify-center">
          <img
            src="/image.png"
            alt="Dashboard"
            className="w-full max-w-[500px] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
