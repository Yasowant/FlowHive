import {
  CalendarIcon,
  ClockIcon,
  FlagIcon,
  MessageSquareIcon,
  FolderIcon,
  ListIcon,
  LockIcon,
} from 'lucide-react';

const features = [
  {
    icon: (
      <CalendarIcon className="text-blue-500 w-10 h-10" aria-hidden="true" />
    ),
    title: 'Calendar',
    description: "Get a birds-eye view of your team's work.",
  },
  {
    icon: <ClockIcon className="text-pink-500 w-10 h-10" aria-hidden="true" />,
    title: 'Time',
    description: 'Measure productivity and activity level of your team.',
  },
  {
    icon: <FlagIcon className="text-orange-500 w-10 h-10" aria-hidden="true" />,
    title: 'Milestones',
    description: 'Ensure that critical project deadlines are met.',
  },
  {
    icon: (
      <MessageSquareIcon
        className="text-green-500 w-10 h-10"
        aria-hidden="true"
      />
    ),
    title: 'Discussions',
    description:
      'Hub of common questions, interesting ideas, and useful discussion.',
  },
  {
    icon: <FolderIcon className="text-blue-500 w-10 h-10" aria-hidden="true" />,
    title: 'Files',
    description: 'Bring your files and cloud content together.',
  },
  {
    icon: <ListIcon className="text-blue-500 w-10 h-10" aria-hidden="true" />,
    title: 'Tasks',
    description: 'The most simple and intuitive way to stay organized.',
  },
  {
    icon: <LockIcon className="text-blue-500 w-10 h-10" aria-hidden="true" />,
    title: 'Passwords',
    description: 'Passwords manager for your business.',
  },
];

export default function CoreFeatures() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Core Applications featured in every plan
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div>{feature.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-1">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
