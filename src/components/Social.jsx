import React, { Component } from 'react';
class Social extends Component {
    render() {
        return (
            <div className="copy">
                <div class="social">
                    <a href="https://github.com/mommotti" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="https://www.instagram.com/mommottix/" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.facebook.com/matteofenu97/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://www.linkedin.com/in/fenumatteo/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://twitter.com/mommottee" target="_blank"><i class="fab fa-twitter"></i></a>
                </div>
                <div copy-hr>
                    <hr class="social-distancing"></hr>
                    <p>&copy; 2020 Matteo Fenu</p>
                </div>
            </div>

        )
    }
}
export default Social