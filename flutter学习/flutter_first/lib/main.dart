import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(home: HomeScreen());
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return new DefaultTabController(
        length: 3,
        child: Scaffold(
          appBar: AppBar(
              title: Text('Home'),
              leading: BackButton(),
              actions: [BackButton()],
              bottom: TabBar(
                tabs: [
                  Tab(text: '关注'),
                  Tab(text: '推荐'),
                  Tab(text: '热榜'),
                ],
              )),
              body: Text('hello world!!'),
              floatingActionButton: RaisedButton(
                onPressed: () => {
                  print('212121')
                },
                child: Text('+'),
              )
        ));
  }
}

// class RandomWordsState extends State<RandomWords> {
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         title: Text('Startup Name Generator'),
//       ),
//       body: _buildSuggestions(),
//     );
//   }
//   final _suggestions = <WordPair>[];
//   final _biggerFont =const TextStyle(fontSize: 18.0);
//   Widget _buildSuggestions () {
//     return ListView.builder(
//       padding: const EdgeInsets.all(16.0),
//       itemBuilder: (context, i) {
//         if (i.isOdd) return Divider();
//         final index = i ~/ 2;
//         if (index >= _suggestions.length) {
//           _suggestions.addAll(generateWordPairs().take(10));
//         }
//         return _buildRow(_suggestions[index]);
//       },
//     );
//   }
//   Widget _buildRow(WordPair pair) {
//     return ListTile(
//       title: Text(
//         pair.asPascalCase,
//         style: _biggerFont,
//       ),
//     );
//   }
// }

// class RandomWords extends StatefulWidget {
//   @override
//   RandomWordsState createState() => RandomWordsState();
// }
