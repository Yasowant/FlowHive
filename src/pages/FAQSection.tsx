import { useState } from 'react';

const faqs = [
  {
    question: 'What is FlowHive?',
    answer:
      'FlowHive is a project management tool that helps teams streamline tasks, track time, and manage workflows efficiently.',
  },
  {
    question: 'How can I track my tasks?',
    answer:
      'You can track tasks using the Kanban board or the task list feature, which helps you stay organized and up-to-date.',
  },
  {
    question: 'Does FlowHive support team collaboration?',
    answer:
      'Yes, FlowHive allows team collaboration through shared boards, discussions, and file sharing.',
  },
  {
    question: 'Can I integrate FlowHive with other tools?',
    answer:
      'Yes, FlowHive supports integration with popular tools like Slack, Google Calendar, and Trello.',
  },
  {
    question: 'Is there a mobile app available?',
    answer:
      'Yes, FlowHive offers a mobile app for both iOS and Android to keep you connected on the go.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 bg-white text-gray-800 font-medium focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="text-gray-500">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 border-t border-gray-200 bg-gray-50 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
