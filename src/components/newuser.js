  <Router history={ hashHistory }>
    <Route path="/" component={ App }>

      <IndexRoute component={ Home } />
      <Route path="/Login" component={ Login } />
      <Route path="/Signup" component={ Signup } />
      <Route path="/Dashboard" component={ Dashboard } />
      <Route path="/Account" component={ Account } />
      <Route path="/Order" component={ Order } />
      <Route path="/Confirmation" component={ Confirmation } />
      <Route path="/FAQ" component={ FAQ } />
    </Route>
  </Router>,



//app to grab dashboard order info
constructor(props) {
    super(props);
    
    this.state = {
      user: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      zipCode: '',
      focusedInput: null,
      startDate: null,
      endDate: null,
      time: null
    }    
  }

  putInOrder(startDate, endDate, pickupTime, dropoffTime){
    this.setState({
      startDate: startDate,
      endDate: endDate,
      pickupTime: pickupTime,
      dropoffTime: dropoffTime
    })

      console.log(startDate, endDate)
      console.log('app :',this.state.startDate, this.state.endDate)
      
  }

  render() {

    const newChildren = React.cloneElement(this.props.children, {
      putInOrder: this.putInOrder.bind(this),
      pickupTime: this.state.pickupTime,
      dropoffTime: this.state.dropoffTime,
      startDate: this.state.startDate,
      firebase: firebase



    });



    //routing
    <div className="container center-block">
        <div className="content">
          { newChildren || <Home /> }
        </div>
      </div>