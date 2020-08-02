import React, { Component } from 'react';
import Tiltskill from '../components/Tiltskill'
class Skills extends Component {
    render() {
        return (
            <div className="condiv skills-height">
                <h1 className="subtopic">My Skills</h1>
                <div className="skill-wrapper">
                    <div>
                        <h3 className="dev">Development:</h3>
                        <div className="skill-grid">
                            <Tiltskill
                                info="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><polygon fill="#e7a42b" points="8,5 42,5 38,39 25,43 11,39" /><polygon fill="#f2bf22" points="38.63,8 35.25,36.71 25,39.86 25,8" /><polygon fill="#faf9f8" points="25,21 26,23 25,25 15.79,25 16.64,12 25,12 26,14 25,16 21.03,16 20.7,21" /><polygon fill="#ebebeb" points="24.9,32.57 25,32.54 26,35 25,36.72 24.94,36.74 16.61,34.36 16.05,28 20.07,28 20.35,31.27" /><polygon fill="#fff" points="34.07,21 32.5,34.42 25,36.72 25,32.54 28.83,31.36 29.57,25 25,25 25,21" /><polygon fill="#fff" points="34.92,18 30.93,18 30.67,16 25,16 25,12 34.13,12 34.3,13.26" /></svg>} />
                            <Tiltskill
                                info="https://developer.mozilla.org/en-US/docs/Web/HTML"
                                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" /><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z" /><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z" /><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z" /></svg>} />
                            <Tiltskill
                                info="https://developer.mozilla.org/en-US/docs/Web/CSS"
                                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" /><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z" /><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z" /><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z" /></svg>} />
                            <Tiltskill
                                info="https://sass-lang.com/"
                                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#f06292" d="M39.867,25.956c-1.538,0.008-2.87,0.377-3.986,0.928c-0.408-0.815-0.822-1.532-0.891-2.065	c-0.081-0.622-0.175-0.994-0.077-1.735c0.098-0.741,0.527-1.791,0.521-1.87c-0.006-0.079-0.096-0.456-0.983-0.463	c-0.887-0.006-1.646,0.171-1.735,0.405c-0.089,0.234-0.26,0.761-0.366,1.311c-0.155,0.804-1.771,3.673-2.688,5.173	c-0.3-0.586-0.555-1.102-0.608-1.51c-0.081-0.622-0.175-0.994-0.077-1.735c0.098-0.741,0.527-1.791,0.521-1.87	c-0.006-0.079-0.096-0.456-0.983-0.463c-0.887-0.006-1.646,0.171-1.735,0.405c-0.089,0.234-0.185,0.781-0.366,1.311	c-0.182,0.529-2.329,5.314-2.892,6.555c-0.287,0.632-0.536,1.14-0.712,1.486c-0.001-0.001-0.001-0.002-0.001-0.002	s-0.011,0.023-0.029,0.062c-0.151,0.295-0.24,0.458-0.24,0.458s0.001,0.002,0.003,0.006c-0.12,0.217-0.248,0.418-0.311,0.418	c-0.044,0-0.133-0.577,0.019-1.369c0.32-1.66,1.087-4.248,1.08-4.338c-0.004-0.046,0.143-0.497-0.501-0.733	c-0.626-0.229-0.849,0.153-0.906,0.154c-0.055,0.001-0.096,0.135-0.096,0.135s0.697-2.911-1.33-2.911	c-1.268,0-3.024,1.387-3.889,2.644c-0.546,0.298-1.715,0.936-2.954,1.617c-0.476,0.262-0.962,0.529-1.423,0.783	c-0.031-0.035-0.063-0.069-0.095-0.104c-2.459-2.623-7.003-4.478-6.811-8.005c0.07-1.282,0.516-4.658,8.733-8.752	c6.731-3.354,12.12-2.431,13.051-0.386c1.33,2.923-2.88,8.354-9.87,9.138c-2.663,0.299-4.066-0.734-4.415-1.118	c-0.367-0.405-0.422-0.423-0.559-0.347c-0.223,0.124-0.082,0.481,0,0.694c0.209,0.543,1.065,1.506,2.525,1.986	c1.285,0.422,4.412,0.653,8.193-0.81c4.236-1.638,7.543-6.196,6.571-10.005c-0.988-3.874-7.412-5.148-13.492-2.988	C12.44,9.332,8.523,11.35,5.706,13.984c-3.349,3.132-3.883,5.859-3.663,6.998c0.782,4.048,6.361,6.684,8.595,8.637	c-0.11,0.061-0.214,0.118-0.308,0.17c-1.12,0.554-5.373,2.78-6.437,5.131c-1.207,2.667,0.192,4.581,1.118,4.839	c2.869,0.798,5.813-0.638,7.396-2.998c1.582-2.359,1.389-5.432,0.663-6.834c-0.009-0.017-0.019-0.034-0.028-0.052	c0.289-0.171,0.584-0.345,0.876-0.517c0.57-0.335,1.13-0.647,1.615-0.911c-0.272,0.744-0.471,1.637-0.574,2.926	c-0.122,1.514,0.499,3.471,1.311,4.241c0.358,0.339,0.788,0.347,1.06,0.347c0.945,0,1.376-0.786,1.851-1.716	c0.582-1.14,1.099-2.468,1.099-2.468s-0.648,3.586,1.118,3.586c0.644,0,1.291-0.835,1.58-1.26c0.001,0.005,0.001,0.007,0.001,0.007	s0.017-0.028,0.05-0.083c0.067-0.102,0.105-0.167,0.105-0.167s0.001-0.007,0.003-0.019c0.259-0.449,0.833-1.473,1.693-3.162	c1.112-2.182,2.178-4.916,2.178-4.916s0.099,0.668,0.424,1.774c0.191,0.65,0.597,1.369,0.918,2.059	c-0.258,0.358-0.416,0.563-0.416,0.563s0.001,0.004,0.004,0.011c-0.206,0.274-0.437,0.569-0.679,0.857	c-0.878,1.045-1.923,2.239-2.063,2.583c-0.165,0.406-0.126,0.704,0.193,0.945c0.233,0.175,0.647,0.203,1.08,0.174	c0.789-0.053,1.343-0.249,1.617-0.368c0.427-0.151,0.924-0.388,1.39-0.731c0.861-0.633,1.38-1.538,1.33-2.738	c-0.028-0.661-0.238-1.316-0.505-1.934c0.078-0.112,0.156-0.226,0.235-0.34c1.357-1.984,2.41-4.164,2.41-4.164	s0.099,0.668,0.424,1.774c0.164,0.559,0.489,1.17,0.781,1.768c-1.276,1.037-2.067,2.242-2.342,3.032	c-0.508,1.462-0.11,2.124,0.636,2.275c0.338,0.068,0.816-0.087,1.175-0.239c0.447-0.148,0.984-0.395,1.486-0.764	c0.861-0.633,1.689-1.519,1.639-2.718c-0.023-0.546-0.171-1.088-0.372-1.608c1.082-0.451,2.482-0.701,4.266-0.493	c3.827,0.447,4.577,2.836,4.434,3.836c-0.144,1-0.946,1.55-1.215,1.716c-0.268,0.166-0.35,0.224-0.328,0.347	c0.033,0.179,0.157,0.173,0.386,0.134c0.315-0.053,2.009-0.813,2.082-2.659C46.089,28.509,43.844,25.935,39.867,25.956z M10.37,35.9	c-1.268,1.383-3.038,1.905-3.798,1.465c-0.82-0.475-0.495-2.511,1.06-3.979c0.948-0.894,2.172-1.718,2.984-2.225	c0.185-0.111,0.456-0.274,0.786-0.472c0.055-0.031,0.086-0.048,0.086-0.048l-0.001-0.002c0.064-0.038,0.129-0.077,0.196-0.118	C12.25,32.61,11.701,34.449,10.37,35.9z M19.605,29.623c-0.441,1.076-1.365,3.83-1.928,3.682c-0.483-0.127-0.777-2.22-0.096-4.28	c0.342-1.037,1.074-2.276,1.504-2.757c0.692-0.774,1.454-1.027,1.639-0.713C20.959,25.955,19.882,28.948,19.605,29.623z M27.234,33.263c-0.187,0.098-0.359,0.159-0.438,0.112c-0.059-0.035,0.077-0.164,0.077-0.164s0.954-1.027,1.33-1.494	c0.219-0.272,0.472-0.595,0.748-0.955c0.002,0.036,0.003,0.072,0.003,0.107C28.952,32.099,27.764,32.929,27.234,33.263z M33.111,31.923c-0.14-0.099-0.116-0.42,0.343-1.421c0.18-0.393,0.592-1.054,1.306-1.686c0.083,0.26,0.133,0.509,0.132,0.741	C34.883,31.105,33.779,31.683,33.111,31.923z" /></svg>} />
                            <Tiltskill
                                info="https://nodejs.org/en/"
                                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#388e3c" d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013" /><path fill="#37474f" d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z" /><path fill="#2e7d32" d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076" /><path fill="#4caf50" d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076" /><path fill="#37474f" d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z" /></svg>} />

                            <Tiltskill
                                info="https://www.mongodb.com/"
                                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#5d4037" d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z" /><path fill="#4caf50" d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z" /><path fill="#dcedc8" d="M23 28H25V36H23z" /><path fill="#4caf50" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z" /><path fill="#81c784" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z" /></svg>} />

                            <Tiltskill
                                info="https://firebase.google.com/"
                                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#ff8f00" d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z" /><path fill="#ffa000" d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z" /><path fill="#ff6f00" d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z" /><path fill="#ffc400" d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z" /></svg>} />

                            <Tiltskill
                                info="https://reactjs.org/"
                                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z" /><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z" /><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z" /><circle cx="24" cy="24" r="4" fill="#80deea" /></svg>} />

                            <Tiltskill
                                info="https://vuejs.org/"
                                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><polygon fill="#81c784" points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8" /><polygon fill="#455a64" points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8" /></svg>} />

                            <Tiltskill
                                info="https://git-scm.com/"
                                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#F4511E" d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z" /></svg>} />

                            <Tiltskill
                                info="https://github.com/"
                                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="rL2wppHyxHVbobwndsT6Ca" x1="4" x2="44" y1="23.508" y2="23.508" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4c4c4c" /><stop offset="1" stop-color="#343434" /></linearGradient><path fill="url(#rL2wppHyxHVbobwndsT6Ca)" d="M24,4C12.954,4,4,12.954,4,24c0,8.887,5.801,16.411,13.82,19.016h12.36	C38.199,40.411,44,32.887,44,24C44,12.954,35.046,4,24,4z" /><path d="M30.01,41.996L30,36.198c0-0.939-0.22-1.856-0.642-2.687c5.641-1.133,8.386-4.468,8.386-10.177	c0-2.255-0.665-4.246-1.976-5.92c0.1-0.317,0.174-0.645,0.22-0.981c0.188-1.369-0.023-2.264-0.193-2.984l-0.027-0.116	c-0.186-0.796-0.409-1.364-0.418-1.388l-0.111-0.282l-0.111-0.282l-0.302-0.032l-0.303-0.032c0,0-0.199-0.021-0.501-0.021	c-0.419,0-1.04,0.042-1.627,0.241l-0.196,0.066c-0.74,0.249-1.439,0.485-2.417,1.069c-0.286,0.171-0.599,0.366-0.934,0.584	C27.334,12.881,25.705,12.69,24,12.69c-1.722,0-3.365,0.192-4.889,0.571c-0.339-0.22-0.654-0.417-0.942-0.589	c-0.978-0.584-1.677-0.819-2.417-1.069l-0.196-0.066c-0.585-0.199-1.207-0.241-1.626-0.241c-0.302,0-0.501,0.021-0.501,0.021	l-0.302,0.032l-0.3,0.031l-0.112,0.281l-0.113,0.283c-0.01,0.026-0.233,0.594-0.419,1.391l-0.027,0.115	c-0.17,0.719-0.381,1.615-0.193,2.983c0.048,0.346,0.125,0.685,0.23,1.011c-1.285,1.666-1.936,3.646-1.936,5.89	c0,5.695,2.748,9.028,8.397,10.17c-0.194,0.388-0.345,0.798-0.452,1.224c-0.197,0.067-0.378,0.112-0.538,0.137	c-0.238,0.036-0.487,0.054-0.739,0.054c-0.686,0-1.225-0.134-1.435-0.259c-0.313-0.186-0.872-0.727-1.414-1.518	c-0.463-0.675-1.185-1.558-1.992-1.927c-0.698-0.319-1.437-0.502-2.029-0.502c-0.138,0-0.265,0.01-0.376,0.028	c-0.517,0.082-0.949,0.366-1.184,0.78c-0.203,0.357-0.235,0.773-0.088,1.141c0.219,0.548,0.851,0.985,1.343,1.255	c0.242,0.133,0.765,0.619,1.07,1.109c0.229,0.368,0.335,0.63,0.482,0.992c0.087,0.215,0.183,0.449,0.313,0.732	c0.47,1.022,1.937,1.924,2.103,2.023c0.806,0.483,2.161,0.638,3.157,0.683l0.123,0.003c0,0,0.001,0,0.001,0	c0.24,0,0.57-0.023,1.004-0.071v2.613c0.002,0.529-0.537,0.649-1.25,0.638l0.547,0.184C19.395,43.572,21.645,44,24,44	c2.355,0,4.605-0.428,6.703-1.176l0.703-0.262C30.695,42.538,30.016,42.422,30.01,41.996z" opacity=".05" /><path d="M30.781,42.797c-0.406,0.047-1.281-0.109-1.281-0.795v-5.804c0-1.094-0.328-2.151-0.936-3.052	c5.915-0.957,8.679-4.093,8.679-9.812c0-2.237-0.686-4.194-2.039-5.822c0.137-0.365,0.233-0.75,0.288-1.147	c0.175-1.276-0.016-2.086-0.184-2.801l-0.027-0.116c-0.178-0.761-0.388-1.297-0.397-1.319l-0.111-0.282l-0.303-0.032	c0,0-0.178-0.019-0.449-0.019c-0.381,0-0.944,0.037-1.466,0.215l-0.196,0.066c-0.714,0.241-1.389,0.468-2.321,1.024	c-0.332,0.198-0.702,0.431-1.101,0.694C27.404,13.394,25.745,13.19,24,13.19c-1.762,0-3.435,0.205-4.979,0.61	c-0.403-0.265-0.775-0.499-1.109-0.699c-0.932-0.556-1.607-0.784-2.321-1.024l-0.196-0.066c-0.521-0.177-1.085-0.215-1.466-0.215	c-0.271,0-0.449,0.019-0.449,0.019l-0.302,0.032l-0.113,0.283c-0.009,0.022-0.219,0.558-0.397,1.319l-0.027,0.116	c-0.169,0.715-0.36,1.524-0.184,2.8c0.056,0.407,0.156,0.801,0.298,1.174c-1.327,1.62-1.999,3.567-1.999,5.795	c0,5.703,2.766,8.838,8.686,9.806c-0.395,0.59-0.671,1.255-0.813,1.964c-0.33,0.13-0.629,0.216-0.891,0.256	c-0.263,0.04-0.537,0.06-0.814,0.06c-0.69,0-1.353-0.129-1.69-0.329c-0.44-0.261-1.057-0.914-1.572-1.665	c-0.35-0.51-1.047-1.417-1.788-1.755c-0.635-0.29-1.298-0.457-1.821-0.457c-0.11,0-0.21,0.008-0.298,0.022	c-0.366,0.058-0.668,0.252-0.828,0.534c-0.128,0.224-0.149,0.483-0.059,0.708c0.179,0.448,0.842,0.85,1.119,1.002	c0.335,0.184,0.919,0.744,1.254,1.284c0.251,0.404,0.37,0.697,0.521,1.067c0.085,0.209,0.178,0.437,0.304,0.712	c0.331,0.719,1.353,1.472,1.905,1.803c0.754,0.452,2.154,0.578,2.922,0.612l0.111,0.002c0.299,0,0.8-0.045,1.495-0.135v3.177	c0,0.779-0.991,0.81-1.234,0.81c-0.031,0,0.503,0.184,0.503,0.184C19.731,43.64,21.822,44,24,44c2.178,0,4.269-0.36,6.231-1.003	C30.231,42.997,30.812,42.793,30.781,42.797z" opacity=".07" /><path fill="#fff" d="M36.744,23.334c0-2.31-0.782-4.226-2.117-5.728c0.145-0.325,0.296-0.761,0.371-1.309	c0.172-1.25-0.031-2-0.203-2.734s-0.375-1.25-0.375-1.25s-0.922-0.094-1.703,0.172s-1.453,0.469-2.422,1.047	c-0.453,0.27-0.909,0.566-1.27,0.806C27.482,13.91,25.785,13.69,24,13.69c-1.801,0-3.513,0.221-5.067,0.652	c-0.362-0.241-0.821-0.539-1.277-0.811c-0.969-0.578-1.641-0.781-2.422-1.047s-1.703-0.172-1.703-0.172s-0.203,0.516-0.375,1.25	s-0.375,1.484-0.203,2.734c0.077,0.562,0.233,1.006,0.382,1.333c-1.31,1.493-2.078,3.397-2.078,5.704	c0,5.983,3.232,8.714,9.121,9.435c-0.687,0.726-1.148,1.656-1.303,2.691c-0.387,0.17-0.833,0.33-1.262,0.394	c-1.104,0.167-2.271,0-2.833-0.333s-1.229-1.083-1.729-1.813c-0.422-0.616-1.031-1.331-1.583-1.583	c-0.729-0.333-1.438-0.458-1.833-0.396c-0.396,0.063-0.583,0.354-0.5,0.563c0.083,0.208,0.479,0.521,0.896,0.75	c0.417,0.229,1.063,0.854,1.438,1.458c0.418,0.674,0.5,1.063,0.854,1.833c0.249,0.542,1.101,1.219,1.708,1.583	c0.521,0.313,1.562,0.491,2.688,0.542c0.389,0.018,1.308-0.096,2.083-0.206v3.75c0,0.639-0.585,1.125-1.191,1.013	C19.756,43.668,21.833,44,24,44c2.166,0,4.243-0.332,6.19-0.984C29.585,43.127,29,42.641,29,42.002v-5.804	c0-1.329-0.527-2.53-1.373-3.425C33.473,32.071,36.744,29.405,36.744,23.334z M11.239,32.727c-0.154-0.079-0.237-0.225-0.185-0.328	c0.052-0.103,0.22-0.122,0.374-0.043c0.154,0.079,0.237,0.225,0.185,0.328S11.393,32.806,11.239,32.727z M12.451,33.482	c-0.081,0.088-0.255,0.06-0.389-0.062s-0.177-0.293-0.096-0.381c0.081-0.088,0.255-0.06,0.389,0.062S12.532,33.394,12.451,33.482z M13.205,34.732c-0.102,0.072-0.275,0.005-0.386-0.15s-0.118-0.34-0.016-0.412s0.275-0.005,0.386,0.15	C13.299,34.475,13.307,34.66,13.205,34.732z M14.288,35.673c-0.069,0.112-0.265,0.117-0.437,0.012s-0.256-0.281-0.187-0.393	c0.069-0.112,0.265-0.117,0.437-0.012S14.357,35.561,14.288,35.673z M15.312,36.594c-0.213-0.026-0.371-0.159-0.353-0.297	c0.017-0.138,0.204-0.228,0.416-0.202c0.213,0.026,0.371,0.159,0.353,0.297C15.711,36.529,15.525,36.62,15.312,36.594z M16.963,36.833c-0.227-0.013-0.404-0.143-0.395-0.289c0.009-0.146,0.2-0.255,0.427-0.242c0.227,0.013,0.404,0.143,0.395,0.289	C17.381,36.738,17.19,36.846,16.963,36.833z M18.521,36.677c-0.242,0-0.438-0.126-0.438-0.281s0.196-0.281,0.438-0.281	c0.242,0,0.438,0.126,0.438,0.281S18.762,36.677,18.521,36.677z" /></svg>} />

                            <Tiltskill
                                info="https://www.heroku.com/"
                                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#7e57c2" d="M7,41L7,7c0-2.209,1.791-4,4-4h26c2.209,0,4,1.785,4,3.994c0,8.018,0,25.991,0,34.01C41,43.214,39.209,45,37,45H11C8.791,45,7,43.209,7,41z" /><path fill="#fff" d="M28.292,39.221v-16.68c0,0,1.085-3.991-13.364,1.633c-0.026,0.071-0.026-15.424-0.026-15.424l4.721-0.029v9.928c0,0,13.218-5.206,13.218,3.948v16.623L28.292,39.221L28.292,39.221L28.292,39.221z M30.982,14.73h-5.007c1.802-2.204,3.434-5.98,3.434-5.98h5.178C34.586,8.751,33.7,11.211,30.982,14.73L30.982,14.73L30.982,14.73z M14.987,39.192v-9.498l4.75,4.75L14.987,39.192L14.987,39.192z" /></svg>} />

                            <Tiltskill
                                info="https://www.netlify.com/"
                                icon={
                                    <svg width="48px" height="48x" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                                        <g>
                                            <path d="M153.094392,165.678589 L90.3094111,152.558384 C90.0414069,153.070392 89.7534024,153.566399 89.4333974,154.034407 L146.59029,237.41171 L150.038344,233.967656 L159.762496,173.498711 C156.454445,172.110689 153.966406,169.210644 153.094392,165.678589 L153.094392,165.678589 Z M130.190034,83.6053063 C127.837997,87.2133627 123.777934,89.6014 119.153862,89.6014 C118.441851,89.6014 117.74984,89.5293989 117.069829,89.4213972 L88.4373818,134.222097 L164.934577,101.301583 C164.910577,100.993578 164.842576,100.705574 164.842576,100.389569 C164.842576,99.7455585 164.930577,99.1215488 165.034579,98.5055391 L130.190034,83.6053063 L130.190034,83.6053063 Z M132.270067,75.4411788 L169.334646,91.2894264 C170.506664,90.3734121 171.842685,89.6934015 173.310708,89.281395 L179.402803,51.4008031 L156.194441,28.1924405 L130.070032,69.0690792 C131.322052,70.9171081 132.098064,73.0931421 132.270067,75.4411788 L132.270067,75.4411788 Z M209.93528,81.9332802 L186.674917,58.6689167 L181.618838,90.0774075 C182.906858,90.7294176 184.054876,91.5974312 185.014891,92.6614478 L209.93528,81.9332802 L209.93528,81.9332802 Z M154.206409,157.406459 C156.018438,154.130408 159.36249,151.866373 163.294551,151.562368 L169.974656,110.013719 C169.450648,109.665714 168.98264,109.249707 168.522633,108.8217 L91.585431,141.934218 C91.7814341,142.73823 91.9174362,143.558243 91.9814372,144.410256 L154.206409,157.406459 L154.206409,157.406459 Z M216.271379,88.2733793 L189.358959,99.8535602 L255.759996,128.242004 L256,128.002 L216.271379,88.2733793 L216.271379,88.2733793 Z M168.178628,173.622713 L160.090501,223.907499 L207.055235,176.942765 L173.226707,169.878654 C171.934686,171.562681 170.202659,172.866701 168.178628,173.622713 L168.178628,173.622713 Z M76.8932015,160.694511 C75.1931749,160.694511 73.5651495,160.402506 72.0411256,159.886498 L56.4408819,184.29888 L50.4127877,178.274786 L65.1890186,155.154424 C64.8210128,154.702417 64.4850076,154.22641 64.1690026,153.738402 L37.4005844,165.262582 L31.0564853,158.918483 L60.3569431,146.306286 L7.38411538,135.250113 L0.140002188,128.002 L2.432038,125.709964 L63.5169925,138.462163 C64.2250035,137.126143 65.1250176,135.898123 66.1850341,134.846107 L36.5365709,91.6014313 L42.5246644,85.6133377 L73.5011485,130.798044 C74.5931655,130.55004 75.7251832,130.402038 76.8932015,130.402038 C78.2012219,130.402038 79.4692417,130.58604 80.6812606,130.898045 L109.665714,85.5453366 C107.393678,83.1772996 105.989656,79.9692495 105.989656,76.4291942 C105.989656,75.389178 106.121658,74.3811622 106.349662,73.4131471 L70.1890967,57.9529055 L76.5331958,51.6088064 L110.793731,66.2610353 C113.069767,64.3890061 115.981812,63.2649885 119.157862,63.2649885 C120.657885,63.2649885 122.097908,63.5289926 123.445929,63.9929999 L150.170346,22.1683464 L128.002,0 L0,128.002 L128.002,256.004 L140.598197,243.407803 L83.0132971,159.398491 C81.1372678,160.226504 79.0692355,160.694511 76.8932015,160.694511 L76.8932015,160.694511 Z M178.122783,111.805747 L171.326677,154.042407 C173.666714,155.930436 175.226738,158.69448 175.522743,161.854529 L214.095345,169.906655 L249.415897,134.586103 L185.662901,107.329677 C183.874873,109.705714 181.202831,111.35374 178.122783,111.805747 L178.122783,111.805747 Z" fill="#25C7B7"></path>
                                        </g>
                                    </svg>} />
                            <Tiltskill
                                info="https://www.npmjs.com/"
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#d50000" d="M0,15h48v17H24v3H13v-3H0V15z" /><path fill="#fff" d="M3 29L8 29 8 21 11 21 11 29 13 29 13 18 3 18zM16 18v14h5v-3h5V18H16zM24 26h-3v-5h3V26zM29 18L29 29 34 29 34 21 37 21 37 29 40 29 40 21 43 21 43 29 45 29 45 18z" /></svg>} />
                        </div>
                    </div>

                    <div className="vl"></div>

                    <div>
                        <h3 className="des">Design:</h3>
                        <div className="skill-grid">
                            <Tiltskill
                                info="https://photoshop.com"
                                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#50e6ff" d="M36,6H12c-3.314,0-6,2.686-6,6v24c0,3.314,2.686,6,6,6h24c3.314,0,6-2.686,6-6V12	C42,8.686,39.314,6,36,6z" /><path fill="#092347" d="M36,40H12c-2.209,0-4-1.791-4-4V12c0-2.209,1.791-4,4-4h24c2.209,0,4,1.791,4,4v24	C40,38.209,38.209,40,36,40z" /><path fill="#fff" d="M14.507,15.372c0-0.106,0.077-0.195,0.182-0.207c0.4-0.044,1.516-0.135,3.897-0.135 c3.588,0,6.101,1.423,6.101,5.317c0,3.512-2.391,5.573-6.249,5.573c-0.225,0-0.45,0-1.216,0v5.882c0,0.098-0.08,0.178-0.178,0.178 h-2.358c-0.098,0-0.178-0.08-0.178-0.178V15.372z M17.222,23.447c0,0,1.187,0.008,1.455,0.008c2.203,0,3.205-1.306,3.205-3.056 c0-1.639-0.974-2.917-3.01-2.917c-0.839,0-1.649,0.048-1.649,0.048V23.447z" /><path fill="#fff" d="M26.156,28.97c0-0.095,0.103-0.154,0.182-0.102c0.504,0.337,1.527,0.914,3.111,0.914 c1.034,0,1.688-0.445,1.688-1.171c0-0.804-1.105-1.387-2.017-1.882c-0.907-0.492-2.944-1.282-2.944-3.826 c0-2.255,1.802-3.615,4.256-3.615c0.94,0,1.977,0.146,2.677,0.401c0.115,0.042,0.185,0.154,0.185,0.277l0,2.291 c0,0.094-0.099,0.155-0.178,0.103c-0.439-0.287-1.407-0.726-2.739-0.726c-1.109,0-1.597,0.54-1.597,1.09 c0,0.964,1.284,1.367,2.436,2.043c1.797,1,2.63,1.977,2.63,3.508c0,2.504-1.867,3.91-4.396,3.91c-1.306,0-2.534-0.285-3.162-0.667 c-0.087-0.053-0.131-0.149-0.131-0.251L26.156,28.97z" /></svg>} />
                            <Tiltskill
                                info="https://www.adobe.com/products/illustrator"
                                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#FF5722" d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4V10z" /><path fill="#1C0802" d="M9,9v30h30V9H9z M23.691,31l-0.762-2.91h-3.916L18.252,31h-3.037l4.443-14.219h2.627L26.758,31H23.691z M30.85,31h-2.773V20.434h2.773V31z M30.552,18.754c-0.271,0.28-0.636,0.42-1.099,0.42s-0.828-0.14-1.099-0.42s-0.405-0.632-0.405-1.055c0-0.43,0.137-0.781,0.41-1.055s0.639-0.41,1.094-0.41s0.82,0.137,1.094,0.41s0.41,0.625,0.41,1.055C30.957,18.122,30.822,18.474,30.552,18.754z" /><path fill="#1C0802" d="M19.639 25.697L22.295 25.697 20.967 20.629z" /></svg>} />
                            <Tiltskill
                                info="https://www.adobe.com/products/aftereffects.html"
                                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#b388ff" d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4 V10z" /><path fill="#170b40" d="M9,9v30h30V9H9z" /><path fill="#b388ff" d="M21.183 27.965h-4.555l-.866 2.846H13L17.694 17h2.407l4.719 13.81h-2.762L21.183 27.965zM17.33 25.66h3.152l-1.584-5.17L17.33 25.66zM30.146 31c-.728 0-1.379-.13-1.953-.389-.575-.259-1.062-.614-1.464-1.063-.402-.449-.707-.975-.918-1.579-.21-.604-.316-1.25-.316-1.94v-.37c0-.778.103-1.491.308-2.139.204-.648.496-1.206.875-1.674.377-.468.837-.833 1.376-1.096.54-.262 1.145-.394 1.814-.394.675 0 1.27.122 1.784.365.514.243.945.585 1.295 1.025.349.439.612.969.788 1.589S34 24.645 34 25.404v1.167h-5.966c.04.335.123.639.247.91.124.272.283.504.476.697s.42.343.679.451c.26.108.552.161.875.161.456 0 .878-.093 1.264-.28.387-.186.719-.476.996-.868l1.23 1.508c-.15.234-.338.462-.563.683-.225.221-.491.419-.797.593-.306.174-.65.313-1.035.417C31.022 30.948 30.603 31 30.146 31zM29.861 22.577c-.272 0-.509.052-.715.157-.205.104-.381.25-.528.436-.147.186-.267.409-.359.669-.092.259-.158.547-.198.863h3.481v-.218c-.006-.272-.042-.525-.109-.759-.066-.234-.167-.436-.303-.607-.136-.171-.309-.303-.519-.398C30.398 22.625 30.149 22.577 29.861 22.577z" /></svg>} />
                            <Tiltskill
                                info="https://www.adobe.com/products/xd/details.html#"
                                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#ff41c8" d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4 V10z" /><path fill="#16020b" d="M9,9v30h30V9H9z M19.093,21.695l1.914-4.883h3.291l-3.34,7.051l3.418,7.168h-3.33l-1.953-4.971 l-1.943,4.971h-3.33l3.418-7.168l-3.35-7.051h3.291L19.093,21.695z M25.069,25.426c0-1.732,0.293-3.024,0.879-3.877 s1.438-1.279,2.559-1.279c0.813,0,1.491,0.352,2.031,1.055v-5.293h2.783v15h-2.51l-0.127-1.074c-0.566,0.847-1.296,1.27-2.188,1.27 c-1.106,0-1.951-0.423-2.534-1.27s-0.881-2.09-0.894-3.73V25.426z M27.843,26.119c0,1.042,0.11,1.77,0.332,2.183 s0.596,0.62,1.123,0.62c0.547,0,0.96-0.244,1.24-0.732v-4.824c-0.273-0.521-0.684-0.781-1.23-0.781 c-0.508,0-0.879,0.205-1.113,0.615s-0.352,1.14-0.352,2.188V26.119z" /></svg>} />
                            <Tiltskill
                                info="https://figma.com"
                                icon={<svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 31" width="48px" height="48px"><path d="M 12.5 1 C 9.467 1 7 3.467 7 6.5 C 7 8.1579175 7.7405106 9.6431625 8.9042969 10.652344 C 7.1773693 11.580958 6 13.405492 6 15.5 C 6 17.360625 6.9316558 19.00426 8.3496094 20 C 6.9316558 20.99574 6 22.639375 6 24.5 C 6 27.533 8.467 30 11.5 30 C 14.533 30 17 27.533 17 24.5 L 17 19 L 17 12 L 20.5 12 C 23.533 12 26 9.533 26 6.5 C 26 3.467 23.533 1 20.5 1 L 12.5 1 z M 12.5 3 L 20.5 3 C 22.43 3 24 4.57 24 6.5 C 24 8.43 22.43 10 20.5 10 L 17 10 L 12.5 10 C 10.57 10 9 8.43 9 6.5 C 9 4.57 10.57 3 12.5 3 z M 11.5 12 L 12.5 12 L 15 12 L 15 19 L 11.5 19 C 9.57 19 8 17.43 8 15.5 C 8 13.57 9.57 12 11.5 12 z M 21 12 A 4 4 0 0 0 21 20 A 4 4 0 0 0 21 12 z M 11.5 21 L 15 21 L 15 24.5 C 15 26.43 13.43 28 11.5 28 C 9.57 28 8 26.43 8 24.5 C 8 22.57 9.57 21 11.5 21 z" /></svg>
                                } />

                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default Skills