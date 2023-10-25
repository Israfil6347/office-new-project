import React from 'react'
import MyCard from '../../globalComponents/components/MyCard'
import MyInputBox from '../../globalComponents/components/MyInputBox'
import MyTextareaBox from '../../globalComponents/components/MyTextareaBox'
import MyButton from '../../globalComponents/components/MyButton'
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader
} from '@react-google-maps/api';
import { serviceCenters } from '../../globalComponents/data/serviceCenters';

const containerStyle = {
  width: '100%',
  height: '620px',
  objectFit: 'fill'
};

const center = {
  lat: 23.756677326621922,
  lng: 90.39362746038861
};

function Contact() {

   const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ''
  });

   const [selectedCenter, setSelectedCenter] = React.useState(null);
 return isLoaded ? (
    <div className='p-6'>
     <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
      <div>
        <MyCard >
          return isLoaded ? (
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
           {serviceCenters.map((service_center) => (
        <Marker
          key={service_center.serviceCenter}
          position={{
            lat: service_center.lat,
            lng: service_center.lng
          }}
          onClick={() => {
            setSelectedCenter(service_center);
          }}
          icon={{
            url: '/dc.png',
            scaledSize: new window.google.maps.Size(50, 50)
          }}
        />
      ))}

      {selectedCenter && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedCenter(null);
          }}
          position={{
            lat: selectedCenter.lat,
            lng: selectedCenter.lng
          }}
        >
          <div className="w-96 text-primaryVariant">
            <div className="text-xl font-bold  px-2">
              {selectedCenter.serviceCenter}
            </div>
            <div className="text-sm p-2">
              <p>{selectedCenter.address}</p>
              <p>{selectedCenter.phone}</p>
              <p>{selectedCenter.ipPhone}</p>
              <p>{selectedCenter.fax}</p>
              <p>{selectedCenter.email}</p>
            </div>
            <div className="text-sm p-2">
              <p className="font-semibold">{selectedCenter.inchargeName}</p>
              <p>{selectedCenter.inchargeDesignation}</p>
            </div>
            <div className="text-sm p-2">
              <p>{selectedCenter.collection}</p>
              <p>{selectedCenter.time}</p>
            </div>
          </div>
        </InfoWindow>
      )}
         </GoogleMap>
        </MyCard>
      </div>
      <div className='border bg-surface py-16 px-4 shadow-sm md:py-20 md:px-20'>
      
            <div className='p-4'>
              <h2 className='font-semibold text-2xl text-center'>Message</h2>
              <p className='text-center'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium autem corporis, </p>
            </div>
           
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:mt-6
               '>
                <div>
                <MyInputBox
                  label="Fast Name"
                  id="fastName"
                  name="fastName"
                  inputType="text"
                  required={false}
                  disabled={false}
                  value={""}
                  onChangeHandler={(event)=>{}}
                  >

                  </MyInputBox>
                </div>
                <div>
                  <MyInputBox
                    label="Last Name"
                    id="lastName"
                    name="lastName"
                    inputType="text"
                    required={false}
                    disabled={false}
                    value={""}
                  
                    onChangeHandler={(event)=>{}}
                    ></MyInputBox>
                </div>
               </div>
           
                <div className='grid grid-cols-1 md:gap-4 mt-6'>
                  <MyInputBox
                    disabled={false}
                    label="Email (Personal)"
                    name="ApplicantPersonalEmail"
                    id="ApplicantPersonalEmail"
                    value={''}
                    inputType="text"
                    required={true}
                    error={''}
                    onChangeHandler={(event) => {
                    
                    }}
                  />
              </div>
              <div className='grid grid-cols-1 md:gap-4 mt-6'>
                  <MyTextareaBox
                    disabled={false}
                    label="Email (Personal)"
                    name="ApplicantPersonalEmail"
                    id="ApplicantPersonalEmail"
                    value={''}
                    inputType="text"
                    required={true}
                    error={''}
                    cols={5}
                    rows={5}
                    onChangeHandler={(event) => {
                    
                    }}
                  />
              </div>
              <div className='flex justify-center items-center mt-6'>
                
                <MyButton
                  type="button"
                  styleClass="w-1/2"
                  disabled={false}
                  label="Submit"></MyButton>  
              </div>

                  
                  
         

            </div>
     </div>
    </div>
  ) : (
    <></>
  );
}

export default Contact
