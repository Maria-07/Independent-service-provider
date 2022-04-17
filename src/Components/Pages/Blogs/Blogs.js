import React from "react";
import { Accordion } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="container my-36">
      <h1 className="my-5">Some Basic Questions</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h1 className=" font-medium text-lg">
              #1 Authentication vs. Authorization
            </h1>
          </Accordion.Header>
          <Accordion.Body>
            <>
              The act of proving a person's identification is known as
              authentication. Authentication is done via passwords, one-time
              pins, biometric information, and other information provided or
              entered by the user. Several parts of authentication can be viewed
              and changed by the user. It must be completed before the
              authorization procedure may begin. While user identity has
              traditionally been verified via a username and password
              combination, today's authentication methods typically rely on
              three types of data. What you know, what you have, and who you are
              are all important factors.
              <br />
              <br />
              Authentication is a method of ascertaining that persons are who
              they claim to be. After this has been validated, authorization is
              used to provide the user permission to access various levels of
              information and carry out certain tasks, based on the rules set
              for different types of users. The organization's settings, which
              it implements and maintains, control authorization. The user has
              no control over permission and has no visibility into it. After
              the authentication step has been completed, this operation is
              carried out. After a user has been confirmed, authorization
              controls are put in place to ensure that they have access to the
              data they need and that they can perform particular actions, such
              as adding or deleting data, based on the privileges granted by the
              company.
            </>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h1 className=" font-medium text-lg">
              #2 Why are you using firebase? What other options do you have to
              implement authentication?
            </h1>
          </Accordion.Header>
          <Accordion.Body>
            <>
              For dynamic apps, Firebase provides a less technical and
              time-saving option for building full-fledged backend code. If we
              ever want to host and administer our app in the cloud, we might
              want to consider using this technology. Because Firebase is
              serverless, it eliminates the need to bother about cloud server
              configuration details. It also allows us access to other Google
              goods and capabilities, such as Google Drive and Sheets, as a
              Google Cloud service. For example, we may import dummy data from
              Google Sheets and utilize it to serve our app momentarily.
              <br />
              <br />
              <ol>
                <h5 className="mb-3">Other Authentication systems</h5>
                <li>
                  <b> 1. password-based authentication: </b>The most frequent
                  way of authentication is passwords. A string of letters,
                  numbers or special characters can be used as a password.
                </li>
                <li>
                  <b>2. Methods of Multi-factor Authentication:</b> MFA
                  (Multi-Factor Authentication) is an authentication system that
                  requires a user to be identified in two or more different
                  methods.
                </li>
                <li>
                  <b>3. Authentication using certificates:</b> Digital
                  certificates are used in certificate-based authentication
                  solutions to identify individuals, machines, and devices.
                </li>
                <li>
                  <b> 4. Authentication via biometrics: </b> Biometrics
                  authentication is a type of security that relies on an
                  individual's unique biological traits.
                </li>
                <li>
                  <b>5. Authentication using tokens:</b> Users can submit their
                  credentials once and obtain a unique encrypted string of
                  random characters with token-based authentication methods.
                </li>
              </ol>
              <br />
            </>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h1 className=" font-medium text-lg">
              #3 What other services does firebase provide other than
              authentication
            </h1>
          </Accordion.Header>
          <Accordion.Body>
            <>
              Firebase offers a variety of services without authentication, the
              most useful of which are:
              <ul className=" font-medium my-3">
                <li>Cloud Firestore</li>
                <li>Cloud Functions</li>
                <li>Hosting</li>
                <li>Cloud Storage</li>
                <li>Google Analytics</li>
                <li>Predictions Cloud</li>
                <li>Messaging Dynamic</li>
                <li>Links Remote Config</li>
              </ul>
            </>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;
