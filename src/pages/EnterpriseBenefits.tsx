const benefits = [
  {
    title: 'White Label',
    description: 'Bring confidence to your customers and partners.',
    badge: 'ENTERPRISE',
  },
  {
    title: 'Lightning Fast Support',
    description:
      'Get answers quickly with priority email and phone support with responses in less than 1 business day, guaranteed.',
    badge: 'ENTERPRISE',
  },
  {
    title: 'Daily data snapshots',
    description:
      'Are you in a regulated industry or have legal obligations to archive/store data? We provide access to daily snapshots of all of your data.',
    badge: 'ENTERPRISE',
  },
  {
    title: 'Private Cloud',
    description:
      'An isolated private instance of Freedcamp hosted by us in Amazon region of your choosing for a fixed extra yearly cost.',
    badge: 'ENTERPRISE',
  },
  {
    title: '2FA',
    description:
      'Two-factor authentication provides an extra layer of security to the sign-in process.',
    badge: 'ENTERPRISE',
  },
  {
    title: 'SSO with SAML',
    description:
      'Access Freedcamp with corporate credentials using SAML-based SSO – leading industry standard for exchanging the authentication and authorization data. Freedcamp supports Microsoft Azure AD, Google, Okta, Citrix and Amazon SSO.',
    badge: 'ENTERPRISE',
  },
];

const EnterpriseBenefits = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Enterprise Benefits
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {benefits.map((benefit, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              {benefit.title}
              <span className="ml-2 px-2 py-1 text-xs font-semibold text-purple-700 bg-purple-100 rounded-full">
                {benefit.badge}
              </span>
            </h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnterpriseBenefits;
