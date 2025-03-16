const features = [
  {
    title: 'Overview',
    description: 'The what, why, and how of a project.',
    badge: 'BUSINESS',
    level: 'and above',
    badgeColor: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Issue Tracker',
    description: "Simple issue tracking tool you'll enjoy using.",
    badge: 'BUSINESS',
    level: 'and above',
    badgeColor: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Wiki',
    description: 'Long term memory, all in one spot.',
    badge: 'BUSINESS',
    level: 'and above',
    badgeColor: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Invoices+',
    description:
      'Straightforward invoicing and estimates to run your business.',
    badge: 'BUSINESS',
    level: 'and above',
    badgeColor: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'CRM',
    description: 'Never forget another meeting or follow up with CRM.',
    badge: 'BUSINESS',
    level: 'and above',
    badgeColor: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Project Copy',
    description:
      'Turn any project into a template and use templates to create new projects intelligently.',
    badge: 'BUSINESS',
    level: 'and above',
    badgeColor: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Reports',
    description: 'Reports',
    badge: 'BUSINESS',
    level: 'and above',
    badgeColor: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Email-In',
    description:
      'Create tasks, discussions, issues and upload files from emails.',
    badge: 'PRO',
    level: 'and above',
    badgeColor: 'bg-gray-100 text-gray-600',
  },
  {
    title: 'Google Drive, Dropbox, OneDrive',
    description:
      "Link cloud files with ease just as if it's a file that was uploaded through the system.",
    badge: 'PRO',
    level: 'and above',
    badgeColor: 'bg-yellow-100 text-yellow-600',
  },
];

export default function PremiumFeatures() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Premium Features & Addons
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <span
                className={`text-xs font-medium px-2 py-0.5 rounded ${feature.badgeColor}`}
              >
                {feature.badge}
              </span>
              <span className="text-gray-500 text-sm">{feature.level}</span>
            </div>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
