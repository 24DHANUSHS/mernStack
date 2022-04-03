import $ from "jquery";
import React from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
// var $ = require( "jquery" );
// const $ = require( "jquery" ) ;
{/* <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> */}



var AndraPradesh = ["Anantapur","Chittoor","East Godavari","Guntur","Kadapa","Krishna","Kurnool","Prakasam","Nellore","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari"];
var ArunachalPradesh = ["Anjaw","Changlang","Dibang Valley","East Kameng","East Siang","Kra Daadi","Kurung Kumey","Lohit","Longding","Lower Dibang Valley","Lower Subansiri","Namsai","Papum Pare","Siang","Tawang","Tirap","Upper Siang","Upper Subansiri","West Kameng","West Siang","Itanagar"];
var Assam = ["Baksa","Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Goalpara","Golaghat","Hailakandi","Hojai","Jorhat","Kamrup Metropolitan","Kamrup (Rural)","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari","Dima Hasao","Sivasagar","Sonitpur","South Salmara Mankachar","Tinsukia","Udalguri","West Karbi Anglong"];
var Bihar = ["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"];
var Chhattisgarh = ["Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada","Dhamtari","Durg","Gariaband","Janjgir Champa","Jashpur","Kabirdham","Kanker","Kondagaon","Korba","Koriya","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur","Surguja"];
var Goa = ["North Goa","South Goa"];
var Gujarat = ["Ahmedabad","Amreli","Anand","Aravalli","Banaskantha","Bharuch","Bhavnagar","Botad","Chhota Udaipur","Dahod","Dang","Devbhoomi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kheda","Kutch","Mahisagar","Mehsana","Morbi","Narmada","Navsari","Panchmahal","Patan","Porbandar","Rajkot","Sabarkantha","Surat","Surendranagar","Tapi","Vadodara","Valsad"];
var Haryana = ["Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurugram","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Mewat","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"];
var HimachalPradesh = ["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul Spiti","Mandi","Shimla","Sirmaur","Solan","Una"];
var JammuKashmir = ["Anantnag","Bandipora","Baramulla","Budgam","Doda","Ganderbal","Jammu","Kargil","Kathua","Kishtwar","Kulgam","Kupwara","Leh","Poonch","Pulwama","Rajouri","Ramban","Reasi","Samba","Shopian","Srinagar","Udhampur"];
var Jharkhand = ["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribagh","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahebganj","Seraikela Kharsawan","Simdega","West Singhbhum"];
var Karnataka = ["Bagalkot","Bangalore Rural","Bangalore Urban","Belgaum","Bellary","Bidar","Vijayapura","Chamarajanagar","Chikkaballapur","Chikkamagaluru","Chitradurga","Dakshina Kannada","Davanagere","Dharwad","Gadag","Gulbarga","Hassan","Haveri","Kodagu","Kolar","Koppal","Mandya","Mysore","Raichur","Ramanagara","Shimoga","Tumkur","Udupi","Uttara Kannada","Yadgir"];
var Kerala = ["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"];
var MadhyaPradesh = ["Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa","Khargone","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna",
"Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha"];
var Maharashtra = ["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"];
var Manipur = ["Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West","Jiribam","Kakching","Kamjong","Kangpokpi","Noney","Pherzawl","Senapati","Tamenglong","Tengnoupal","Thoubal","Ukhrul"];
var Meghalaya = ["East Garo Hills","East Jaintia Hills","East Khasi Hills","North Garo Hills","Ri Bhoi","South Garo Hills","South West Garo Hills","South West Khasi Hills","West Garo Hills","West Jaintia Hills","West Khasi Hills"];
var Mizoram = ["Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip","Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip"];
var Nagaland = ["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto"];
var Odisha = ["Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Debagarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghpur","Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Kendujhar","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada","Sambalpur","Subarnapur","Sundergarh"];
var Punjab = ["Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka","Firozpur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Mohali","Muktsar","Pathankot","Patiala","Rupnagar","Sangrur","Shaheed Bhagat Singh Nagar","Tarn Taran"];
var Rajasthan = ["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Ganganagar","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Tonk","Udaipur"];
var Sikkim = ["East Sikkim","North Sikkim","South Sikkim","West Sikkim"];
var TamilNadu = ["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Thanjavur","Theni","Thoothukudi","Tiruchirappalli","Tirunelveli","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur","Vellore","Viluppuram","Virudhunagar"];
var Telangana = ["Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jayashankar","Jogulamba","Kamareddy","Karimnagar","Khammam","Komaram Bheem","Mahabubabad","Mahbubnagar","Mancherial","Medak","Medchal","Nagarkurnool","Nalgonda","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Ranga Reddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal Rural","Warangal Urban","Yadadri Bhuvanagiri"];
var Tripura = ["Dhalai","Gomati","Khowai","North Tripura","Sepahijala","South Tripura","Unakoti","West Tripura"];
var UttarPradesh = ["Agra","Aligarh","Allahabad","Ambedkar Nagar","Amethi","Amroha","Auraiya","Azamgarh","Baghpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Faizabad","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kasganj","Kaushambi","Kheri","Kushinagar","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","Raebareli","Rampur","Saharanpur","Sambhal","Sant Kabir Nagar","Shahjahanpur","Shamli","Shravasti","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"];
var Uttarakhand  = ["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri","Pithoragarh","Rudraprayag","Tehri","Udham Singh Nagar","Uttarkashi"];
var WestBengal = ["Alipurduar","Bankura","Birbhum","Cooch Behar","Dakshin Dinajpur","Darjeeling","Hooghly","Howrah","Jalpaiguri","Jhargram","Kalimpong","Kolkata","Malda","Murshidabad","Nadia","North 24 Parganas","Paschim Bardhaman","Paschim Medinipur","Purba Bardhaman","Purba Medinipur","Purulia","South 24 Parganas","Uttar Dinajpur"];
var AndamanNicobar = ["Nicobar","North Middle Andaman","South Andaman"];
var Chandigarh = ["Chandigarh"];
var DadraHaveli = ["Dadra Nagar Haveli"];
var DamanDiu = ["Daman","Diu"];
var Delhi = ["Central Delhi","East Delhi","New Delhi","North Delhi","North East Delhi","North West Delhi","Shahdara","South Delhi","South East Delhi","South West Delhi","West Delhi"];
var Lakshadweep = ["Lakshadweep"];
var Puducherry = ["Karaikal","Mahe","Puducherry","Yanam"];





function Register (){

    // 








    $("#inputState").change(function(){
        var StateSelected = $(this).val();
        console.log(StateSelected);
        var optionsList;
        var htmlString = "";
      
        switch (StateSelected) {
          case "Andra Pradesh":
              optionsList = AndraPradesh;
              break;
          case "Arunachal Pradesh":
              optionsList = ArunachalPradesh;
              break;
          case "Assam":
              optionsList = Assam;
              break;
          case "Bihar":
              optionsList = Bihar;
              break;
          case "Chhattisgarh":
              optionsList = Chhattisgarh;
              break;
          case "Goa":
              optionsList = Goa;
              break;
          case  "Gujarat":
              optionsList = Gujarat;
              break;
          case "Haryana":
              optionsList = Haryana;
              break;
          case "Himachal Pradesh":
              optionsList = HimachalPradesh;
              break;
          case "Jammu and Kashmir":
              optionsList = JammuKashmir;
              break;
          case "Jharkhand":
              optionsList = Jharkhand;
              break;
          case  "Karnataka":
              optionsList = Karnataka;
              break;
          case "Kerala":
              optionsList = Kerala;
              break;
          case  "Madya Pradesh":
              optionsList = MadhyaPradesh;
              break;
          case "Maharashtra":
              optionsList = Maharashtra;
              break;
          case  "Manipur":
              optionsList = Manipur;
              break;
          case "Meghalaya":
              optionsList = Meghalaya ;
              break;
          case  "Mizoram":
              optionsList = Mizoram;
              break;
          case "Nagaland":
              optionsList = Nagaland;
              break;
          case  "Orissa":
              optionsList = Odisha;
              break;
          case "Punjab":
              optionsList = Punjab;
              break;
          case  "Rajasthan":
              optionsList = Rajasthan;
              break;
          case "Sikkim":
              optionsList = Sikkim;
              break;
          case  "Tamil Nadu":
              optionsList = TamilNadu;
              break;
          case  "Telangana":
              optionsList = Telangana;
              break;
          case "Tripura":
              optionsList = Tripura ;
              break;
          case  "Uttaranchal":
              optionsList = Uttarakhand;
              break;
          case  "Uttar Pradesh":
              optionsList = UttarPradesh;
              break;
          case "West Bengal":
              optionsList = WestBengal;
              break;
          case  "Andaman and Nicobar Islands":
              optionsList = AndamanNicobar;
              break;
          case "Chandigarh":
              optionsList = Chandigarh;
              break;
          case  "Dadar and Nagar Haveli":
              optionsList = DadraHaveli;
              break;
          case "Daman and Diu":
              optionsList = DamanDiu;
              break;
          case  "Delhi":
              optionsList = Delhi;
              break;
          case "Lakshadeep":
              optionsList = Lakshadweep ;
              break;
          case  "Pondicherry":
              optionsList = Puducherry;
              break;
      }
      
      
        for(var i = 0; i < optionsList.length; i++){
            
          console.log(StateSelected);
          htmlString = htmlString+"<option value='"+ optionsList[i] +"'>"+ optionsList[i] +"</option>";
          console.log(htmlString);
        }
        console.log(StateSelected);
        $("#inputDistrict").html(htmlString);
      
      });
      












    const history = useHistory();
    const nameRef =React.useRef();
    const emailRef =React.useRef();
    const passRef =React.useRef();
    const dobRef =React.useRef();
    const professionRef =React.useRef();
    const addressRef =React.useRef();
    const phoneRef =React.useRef();
    const stateRef =React.useRef();
    // const districtRef =React.useRef();

    // useEffect(() => {
    //     Axios.get("http://localhost:3001/getUsers").then((response) => {
    //       setListOfUsers(response.data);
    //     });
    //   }, []);
    

    const handleSubmit = (event) =>{
        console.log("hai");
        let c=emailRef.current.value.includes('@')?1:0;
      console.log(c,stateRef.current.value);
      if(c==0 || nameRef.current.value=="" || emailRef.current.value=="" || passRef.current.value=="" || dobRef.current.value=="" || professionRef.current.value=="" || addressRef.current.value=="" || phoneRef.current.value=="" || stateRef.current.value=="SelectState"  )
      {
          window.alert("Invalid  Credentials");
      history.push('/register');
      }
      else{
  // const { nameRef, emailRef, passRef, dobRef, professionRef, addressRef,phoneRef,stateRef ,districtRef} = this.state;
  axios.post("http://localhost:5000/register",{
      "name": nameRef.current.value,
      "email":emailRef.current.value,
      "pass":passRef.current.value,
      "dob":dobRef.current.value,
      "profession":professionRef.current.value,
      "address":addressRef.current.value,
      "phone":phoneRef.current.value,
      "state":stateRef.current.value,
      // "district":districtRef.current.value
    })
    .then((response)=> {
        console.log(response);

        if(response.data===1){
          window.alert("Already Exists");
        }
        else
      {window.alert("Registered Successfully");
      history.push('/login');}
    })
    event.preventDefault();

  // axios.post('/register', { nameRef, emailRef, passRef, dobRef, professionRef, addressRef,phoneRef,stateRef ,districtRef })
  //   .then((result) => {
  //     this.props.history.push("/")
  //   });
      // event.preventDefault();
  //  let data = {name: "stepOne", values: [this.state.user]};
  //  this.context.router.push("/register");
  }     
}
  
//   function toSubmit(){
//    window.alert('<button onClick={handleSubmit}></button>'); 
//   }
    


console.log("called");

const changeLogin = () => history.push('/login');
    return(
        <div classNameName="App">
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                        <div className="login100-more" >
                        {/* <video className="login100-more" controls playsinline="" loop="" autoplay="true">
                        <source src="./muss.mp4" type="video/mp4" autostart="true" />
                        </video> */}
                        </div>
                            <form className="register-login100-form validate-form"    >
                                <span className="register-login100-form-title p-b-34">
                                    Account Register
                                </span>

                                <div className="wrap-input100  validate-input m-b-20" data-validate="Type Name">
                                    <input id="firstname" required ref={nameRef} className="input100" type="text" name="name" placeholder="Name"    />
                                    <span className="focus-input100"></span>
                                </div>
                                
                                <div className="wrap-input100  validate-input m-b-20" data-validate="Type Email" required >
                                    <input className="input100" ref={emailRef} type="email" name="username" placeholder="Email"   required/>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100  validate-input m-b-20" data-validate="Type password" >
                                    <input className="input100" ref={passRef} type="password" name="pass" placeholder="Password" required />
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100  validate-input m-b-20" data-validate="Type D-O-B" >
                                    <input className="input100" type="date" ref={dobRef} name="dob" placeholder="Date Of Birth" required  />
                                    <span className="focus-input100"></span>
                                </div>
                                
                                <div className="wrap-input100  validate-input m-b-20" data-validate="Profession" >
                                    <input className="input100" type="text" ref={professionRef} name="profession" placeholder="Profession" required />
                                    <span className="focus-input100"></span>
                                </div>

                                

                                

                                <div className="wrap-input100  validate-input m-b-20" data-validate="Phone Number" >
                                    <input className="input100" type="text" ref={phoneRef} pattern="[1-9]{1}[0-9]{9}"name="phone" placeholder="Phone Number" max='11' min='10' required />
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100  validate-input m-b-20" data-validate="Address" >
                                    <input className="input100" type="text"  ref={addressRef} name="address" required placeholder="Address Lane"  />
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100  validate-input m-b-20" data-validate="Address" >
                                    <select  ref={stateRef} style={{display: "block",width: "100%",background: "",fontFamily: "Poppins-Regular",fontSize: "18px",color: "#666666",lineHeight: "2",padding: " 14px",height:"100%"}} id="inputState"  required >

                                    <option value="SelectState">Select State</option>
                        <option value="Andra Pradesh">Andra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madya Pradesh">Madya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Orissa">Orissa</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttaranchal">Uttaranchal</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="West Bengal">West Bengal</option>
                        {/* <option disabled style="background-color:#aaa; color:#fff">UNION Territories</option> */}
                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadeep">Lakshadeep</option>
                        <option value="Pondicherry">Pondicherry</option>
                      </select>


                                    
                                    <span className="focus-input100"></span>
                                </div>

                                {/* <div className="wrap-input100  validate-input m-b-20" data-validate="Address" >
                                    <select ref={districtRef} style={{display: "block",width: "100%",background: "transparent",fontFamily: "Poppins-Regular",fontSize: "18px",color: "#666666",lineHeight: "2",padding: " 14px",height:"100%"}} id="inputDistrict"  >
                                    <option value=""> Select District</option>
                                    </select>
                                    <span className="focus-input100"></span>

                                </div> */}

                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn" id="submit" onClick={handleSubmit} >
                                        Sign UP
                                    </button>
                                </div>

                                {/* </center> */}
                                <div className="w- text-center w-full text-center">
                                    <a className="txt2" onClick={changeLogin} >
                                        <h3>Sign In</h3>
                                    </a>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>

    );

}
export default Register;