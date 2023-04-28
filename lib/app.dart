import 'package:flutter/material.dart';

import 'view/number_generator_view.dart';

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: const NumberGeneratorView(),
      theme: ThemeData(scaffoldBackgroundColor: Color.fromARGB(255, 52, 84, 63)),
    );
  }
}