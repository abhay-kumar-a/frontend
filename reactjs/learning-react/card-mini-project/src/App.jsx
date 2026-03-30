import JobCard from './components/JobCard'

const App = () => {

  const arr = ['Google' , 'Amazon' , 'Flipkart' , 'Microsoft' , 'Apple' , 'Meta' , 'Tesla' , 'Nvidia' , 'Intel' , 'AMD']
  
  let obj =  {
    name  : 'Abhay' ,
    age  : 34,
    address : 'Ramagondanhalli',


  }
  const user = [
    {
    name  : 'Nihal' ,
    age  : 20,
    address : 'Ramagondanhalli',
    },
    {
      name  : 'Shink' ,
    age  : 20,
    address : 'Ramagondanhalli',
    },
    {
      name  : 'Vishal' ,
    age  : 20,
    address : 'Ramagondanhalli',
    }
  ];
// Job Data Array with 10 Objects - Now with TWO Categories
const jobsData = [
  {
    id: 1,
    companyLogo: '../src/assets/companies-logo/google.png',
    companyName: "Google",
    postedDays: "2 days ago",
    jobTitle: "Senior Frontend Developer",
    category1: "Full Time",
    category2: "Senior Level",
    price: "$120/hr",
    location: "Mountain View, CA"
  },
  {
    id: 2,
    companyLogo: "../src/assets/companies-logo/meta.png",
    companyName: "Meta",
    postedDays: "1 day ago",
    jobTitle: "React Developer",
    category1: "Full Time",
    category2: "Mid Level",
    price: "$95/hr",
    location: "Remote"
  },
  {
    id: 3,
    companyLogo: "../src/assets/companies-logo/amazon.png",
    companyName: "Amazon",
    postedDays: "3 days ago",
    jobTitle: "Full Stack Engineer",
    category1: "Full Time",
    category2: "Senior Level",
    price: "$130/hr",
    location: "Seattle, WA"
  },
  {
    id: 4,
    companyLogo: "../src/assets/companies-logo/microsoft.png",
    companyName: "Microsoft",
    postedDays: "5 days ago",
    jobTitle: "UI/UX Designer",
    category1: "Part Time",
    category2: "Mid Level",
    price: "$85/hr",
    location: "Redmond, WA"
  },
  {
    id: 5,
    companyLogo: "../src/assets/companies-logo/netflix.png",
    companyName: "Netflix",
    postedDays: "1 week ago",
    jobTitle: "DevOps Engineer",
    category1: "Full Time",
    category2: "Senior Level",
    price: "$140/hr",
    location: "Los Gatos, CA"
  },
  {
    id: 6,
    companyLogo: "../src/assets/companies-logo/apple.png",
    companyName: "Apple",
    postedDays: "4 days ago",
    jobTitle: "iOS Developer",
    category1: "Full Time",
    category2: "Senior Level",
    price: "$125/hr",
    location: "Cupertino, CA"
  },
  {
    id: 7,
    companyLogo: "../src/assets/companies-logo/twitter.png",
    companyName: "Twitter",
    postedDays: "2 days ago",
    jobTitle: "Backend Developer",
    category1: "Full Time",
    category2: "Mid Level",
    price: "$100/hr",
    location: "San Francisco, CA"
  },
  {
    id: 8,
    companyLogo: "../src/assets/companies-logo/uber.png",
    companyName: "Uber",
    postedDays: "6 days ago",
    jobTitle: "Data Scientist",
    category1: "Part Time",
    category2: "Entry Level",
    price: "$75/hr",
    location: "San Francisco, CA"
  },
  {
    id: 9,
    companyLogo: "../src/assets/companies-logo/airbnb.png",
    companyName: "Airbnb",
    postedDays: "3 days ago",
    jobTitle: "Product Manager",
    category1: "Full Time",
    category2: "Senior Level",
    price: "$110/hr",
    location: "San Francisco, CA"
  },
  {
    id: 10,
    companyLogo: "../src/assets/companies-logo/slack.png",
    companyName: "Slack",
    postedDays: "1 day ago",
    jobTitle: "Frontend Developer",
    category1: "Full Time",
    category2: "Mid Level",
    price: "$90/hr",
    location: "Remote"
  }
];

  console.log(user)
  console.log(arr)
  console.log(obj)
  
  return (
    <div className='parent'>


      {/* <User name = {arr[0]}
      />
        <User name = {arr[1]}
      />
        <User name = {arr[2]}
      /> */}
      {/* <User name={obj.name}/> */}
    {
      // arr.map(function(name){
      //   return  <User name={name}/>
      // })
      // user.map(item => {
      //   return <User name={item.name}/>
      // })

      jobsData.map(item => {
    //     companyLogo: "https://via.placeholder.com/50?text=Airbnb",
    // companyName: "Airbnb",
    // postedDays: "3 days ago",
    // jobTitle: "Product Manager",
    // category1: "Full Time",
    // category2: "Senior Level",
    // price: "$110/hr",
    // location: "San Francisco, CA"
        return <JobCard
        companyLogo={item.companyLogo}
        companyName={item.companyName}
        postedDays={item.postedDays}
        jobTitle={item.jobTitle}
        category1={item.category1}
        category2={item.category2}
        price={item.price}
        location={item.location}
        />
      })
    }

      
      
    </div>
  )
}

export default App