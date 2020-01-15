/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react'
import { firestore, auth, getUserDocument, storage } from '../firebase'

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayName: '',
      email: '',
      phone: '',
      photoURL: null
    }
  }

  async componentDidMount() {
    const { uid } = auth.currentUser
    const profile = getUserDocument(uid)
    profile.onSnapshot(snapshot => {
      this.setState({ ...snapshot.data() })
    })
  }

  handleChange = e => {
    const { name, value } = e.target

    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()

    const { uid } = auth.currentUser
    const profile = firestore.doc(`users/${uid}`)

    profile.update(this.state)
  }

  handleImageChange = e => {
    const file = e.target.files[0]
    const { uid } = auth.currentUser
    const profile = firestore.doc(`users/${uid}`).then(() =>
      storage
        .ref()
        .child('user-profiles')
        .child(uid)
        .child(file.name)
        .put(file)
        .then(response => response.ref.getDownloadURL())
        .then(photoURL => profile.update({ photoURL }))
        .catch(error => console.log(error))
    )
  }

  render() {
    const { displayName, email, phone, photoURL } = this.state
    return (
      <>
        <h1 className="settings__heading">Profile settings</h1>
        <div className="profile">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-lg-6 text-center order-md-last">
                <img src={photoURL} alt="avatar" className="profile__avatar" />
                <div>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    className="profile__upload-button"
                    onChange={this.handleImageChange}
                  />
                  <label htmlFor="file">Upload</label>
                  <button type="button" className="button button__small button__light m-1">
                    Remove
                  </button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group-lg">
                  <label htmlFor="displayName" className="profile__input-label">
                    display Name
                  </label>
                  <input
                    type="text"
                    className="form-control mb-4 p-4"
                    id="displayName"
                    name="displayName"
                    value={displayName}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group-lg">
                  <label htmlFor="email" className="profile__input-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control mb-4 p-4"
                    id="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group-lg">
                  <label htmlFor="phone" className="profile__input-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control mb-4 p-4"
                    id="phone"
                    value={phone}
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="button button__block button__primary">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    )
  }
}

export default Profile
