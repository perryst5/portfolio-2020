import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Header = () => {
  return (
    <div className="header">
      <div className="social-links">
        <a href="https://github.com/perryst5"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/steven-perry-2a059569/"><FaLinkedin /></a>
      </div>
    </div>
  )
}

export default Header
