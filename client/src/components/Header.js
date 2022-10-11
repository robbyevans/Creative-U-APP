function Header({ spiceCount }) {
  return (
    <header>
      <div className="heading">
        <h1>Active <element className="live_events">U</element></h1>
      </div>
      <div className="sub_heading">
        <h3 >Find the perfect activity for you.</h3>
      </div>
    </header>
  );
}

export default Header;