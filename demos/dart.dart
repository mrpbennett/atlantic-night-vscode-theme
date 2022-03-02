@overide
Widget build(BuildContext context) {
  return Scaffold(
    appBar: AppBar(
      title: Text('Home'),
      actions: <Widget>[
        IconButton(
          icon: Icon(Icons.exit_to_app),
          onPressed: () {
            FirebaseAuth.instance.signOut();
          },
        )
      ],
    ),
    body: Container(
      child: Column(
        children: <Widget>[
          Text('Welcome'),
          RaisedButton(
            child: Text('Logout'),
            onPressed: () {
              FirebaseAuth.instance.signOut();
            },
          )
        ],
      ),
    ),
  );
}

void greet(String name) {
  // Assume we have a valid name.
  print('Hi, $name!');
}

