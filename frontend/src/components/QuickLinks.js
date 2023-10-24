import Head from 'next/head';

function QuickLinks() {
  const links = [
    { label: 'Student profile', icon: 'microscope' },
    { label: 'IITG Intranet', icon: 'microscope' },
    { label: 'Scholarships', icon: 'microscope' },
    { label: 'Hostel return form', icon: 'microscope' },
    { label: 'Freshers Info', icon: 'microscope' },
    { label: 'Contacts', icon: 'microscope' },
    { label: 'Scholarshipd', icon: 'microscope' },
    { label: 'Hostel return form', icon: 'microscope' },
  ];

  const renderLink = (link) => {
    return (
      <button
        className="w-40 h-32 bg-lightgray p-2 border-solid rounded-xl shadow-xl flex flex-col items-center justify-center mb-7 mr-7"
        onClick={() => alert(`Clicked on ${link.label}`)}
      >
        <i className={`fas fa-${link.icon} text-skyblue text-4xl`}></i>
        <span className="text-skyblue text-lg  mt-2">
          {link.label}
        </span>
      </button>
    );
  };

  return (
    <div className='m-10'>
      <Head>
        <title >Quick Links</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </Head>
      <h1 className="text-black text-3xl mb-4">
        Quick Links
      </h1>
      <div className="flex flex-wrap">
        {links.map((link) => renderLink(link))}
      </div>
    </div>
  );
}

export default QuickLinks;
