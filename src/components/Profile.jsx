/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

const Profile = () => {
  return (
    <>
      <h1 className="settings__heading">Profile settings</h1>
      <div className="profile">
        <div className="row">
          <div className="col-lg-6 text-center order-md-last">
            <div className="profile__avatar" />
            <div>
              <button type="button" className="button button__small button__dark m-1">
                Upload
              </button>
              <button type="button" className="button button__small button__light m-1">
                Remove
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <form>
              <div className="form-group-lg">
                <label htmlFor="name" className="profile__input-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control mb-4 p-4"
                  id="name"
                  name="name"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group-lg">
                <label htmlFor="email" className="profile__input-label">
                  Email
                </label>
                <input type="email" className="form-control mb-4 p-4" id="email" />
              </div>
              <div className="form-group-lg">
                <label htmlFor="phone" className="profile__input-label">
                  Phone
                </label>
                <input type="text" className="form-control mb-4 p-4" id="phone" />
              </div>
              <button type="submit" className="button button__block button__primary">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
