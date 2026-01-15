import React from 'react'
import { Bookmark } from 'lucide-react'
import Card from './components/card'
import User from './components/user'

const App = () => {
 const jobOpenings = [
  {
    brandLogo: "ttps://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag: "Full Time",
    tag2: "Junior Level",
    payPerHour: 45,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/7/70/Meta_Platforms_Inc._logo.svg",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag: "Full Time",
    tag2: "Senior Level",
    payPerHour: 60,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Software Development Engineer",
    tag: "Full Time",
    tag2: "Mid Level",
    payPerHour: 50,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "3 days ago",
    post: "UI Engineer",
    tag: "Full Time",
    tag2: "Senior Level",
    payPerHour: 65,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_N_logo.svg",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "Frontend UI Developer",
    tag: "Full Time",
    tag2: "Senior Level",
    payPerHour: 70,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Web Developer",
    tag: "Part Time",
    tag2: "Junior Level",
    payPerHour: 40,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    companyName: "IBM",
    datePosted: "6 days ago",
    post: "Frontend Software Engineer",
    tag: "Full Time",
    tag2: "Mid Level",
    payPerHour: 55,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol_logo.svgm",
    companyName: "Tesla",
    datePosted: "2 months ago",
    post: "JavaScript Developer",
    tag: "Part Time",
    tag2: "Junior Level",
    payPerHour: 35,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    companyName: "Oracle",
    datePosted: "3 weeks ago",
    post: "Frontend Engineer",
    tag: "Full Time",
    tag2: "Mid Level",
    payPerHour: 48,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Salesforce_logo.svg",
    companyName: "Salesforce",
    datePosted: "8 days ago",
    post: "UI Developer",
    tag: "Full Time",
    tag2: "Senior Level",
    payPerHour: 62,
    location: "Mumbai, India"
  }
];
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,index){
        return <Card key={index}  company={elem.companyName} logo={elem.brandLogo} date={elem.datePosted}
        tag={elem.tag} tag2={elem.tag2} post={elem.post} pay={elem.payPerHour} location={elem.location}/>
      })}
    </div>
  )
}
export default App; // ✅ This is required
