import { Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Work from './Work'
import Resume from './Resume'
import Contact from './Contact'

const ContentLoader = () => {
  return (
    <div className="content-wrapper">
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
    </div>
  )
}

export default ContentLoader
