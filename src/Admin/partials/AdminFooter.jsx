import React from 'react'

function AdminFooter() {
  return (
        <footer className="mt-auto bg-surface text-center text-onSurface">
      <div className=" flex flex-col items-center justify-center p-3 py-10">
        

        <p className="text-sm">
          © 2022 {process.env.REACT_APP_COMPANY_NAME}. All Rights Reserved.
        </p>
        <p className="text-sm">Powered by Dhaka Credit ICT Squad.</p>
      </div>
    </footer>
  )
}

export default AdminFooter
