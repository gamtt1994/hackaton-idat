import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import RNPickerSelect from 'react-native-picker-select';
import moment from 'moment';

const {height, width} = Dimensions.get('window');

const Item = ({item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.itemTitle}>{item.dia}</Text>
  </TouchableOpacity>
);

const ItemHora = ({item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.itemHora, style]}>
    <Text style={styles.itemTitle}>{item.hora}</Text>
  </TouchableOpacity>
);

const ItemMin = ({item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.itemMin, style]}>
    <Text style={styles.itemTitle}>{item.min}</Text>
  </TouchableOpacity>
);

const Meses = () => {
  const fechaActual = moment().format('YYYY-MMMM-DD');
  const Meses = moment.months();
  const MesActual = moment().format('MMMM');
  let DiaActual = moment().format('D');
  let DiaHour = moment().format('h');
  let DiaMin = moment().format('mm');
  console.log('DiaHour', DiaHour);
  console.log('DiaMin', DiaMin);
  const mesprueba = moment().daysInMonth();

  const [meseleccionado, setmesseleccionado] = useState(MesActual);
  const [meseleccionado2, setmesseleccionado2] = useState(MesActual);
  const [diaseleccionado, setdiaseleccionado] = useState(mesprueba);
  const [horaeleccionado, sethoraeleccionado] = useState(DiaHour);
  const [mineleccionado, setminseleccionado] = useState(DiaMin);
  console.log(meseleccionado);
  let countDias = [];
  for (let i = 1; i <= mesprueba; i++) {
    countDias.push({dia: i});
  }

  let countHoras = [];
  for (let i = 1; i <= 12; i++) {
    countHoras.push({hora: i});
  }

  let countMin = [];
  for (let i = 0; i <= 59; i++) {
    countMin.push({min: i});
  }

  const [ultimodia, setultimodia] = useState(countDias);

  const scrollX = new Animated.Value(0);

  const obtenermeses = [];
  for (let x in Meses) {
    obtenermeses.push({label: Meses[x], value: Meses[x]});
  }

  const cambioMes = (value) => {
    var fecha = diaseleccionado;
    console.log(value);
    setmesseleccionado2(value);
    if (value === 'January') {
      setmesseleccionado('January');
      console.log(meseleccionado);
      var month = 0; // January
      fecha = new Date(2020, month + 1, 0);
      setdiaseleccionado(moment(fecha).format('DD'));

      let ultimodia = [];
      for (let i = 1; i <= moment(fecha).format('DD'); i++) {
        ultimodia.push({dia: i});
      }

      setultimodia(ultimodia);
    } else if (value === 'February') {
      var month = 1;
      fecha = new Date(2020, month + 1, 0);
      setdiaseleccionado(moment(fecha).format('DD'));

      let ultimodia = [];
      for (let i = 1; i <= moment(fecha).format('DD'); i++) {
        ultimodia.push({dia: i});
      }

      setultimodia(ultimodia);
    } else if (value === 'March') {
      var month = 2;
      fecha = new Date(2020, month + 1, 0);
      setdiaseleccionado(moment(fecha).format('DD'));

      let ultimodia = [];
      for (let i = 1; i <= moment(fecha).format('DD'); i++) {
        ultimodia.push({dia: i});
      }

      setultimodia(ultimodia);
    } else if (value == 'April') {
      var month = 3;
      fecha = new Date(2020, month + 1, 0);
      setdiaseleccionado(moment(fecha).format('DD'));

      let ultimodia = [];
      for (let i = 1; i <= moment(fecha).format('DD'); i++) {
        ultimodia.push({dia: i});
      }

      setultimodia(ultimodia);
    } else if (value === 'May') {
      var month = 4;
      fecha = new Date(2020, month + 1, 0);
      setdiaseleccionado(moment(fecha).format('DD'));

      let ultimodia = [];
      for (let i = 1; i <= moment(fecha).format('DD'); i++) {
        ultimodia.push({dia: i});
      }

      setultimodia(ultimodia);
    } else if (value == 'June') {
      var month = 5;
      fecha = new Date(2020, month + 1, 0);
      setdiaseleccionado(moment(fecha).format('DD'));

      let ultimodia = [];
      for (let i = 1; i <= moment(fecha).format('DD'); i++) {
        ultimodia.push({dia: i});
      }

      setultimodia(ultimodia);
    } else if (value == 'July') {
      var month = 6;
      fecha = new Date(2020, month + 1, 0);
      setdiaseleccionado(moment(fecha).format('DD'));

      let ultimodia = [];
      for (let i = 1; i <= moment(fecha).format('DD'); i++) {
        ultimodia.push({dia: i});
      }

      setultimodia(ultimodia);
    } else if (value == 'August') {
      var month = 7;
      fecha = new Date(2020, month + 1, 0);
      setdiaseleccionado(moment(fecha).format('DD'));

      let ultimodia = [];
      for (let i = 1; i <= moment(fecha).format('DD'); i++) {
        ultimodia.push({dia: i});
      }

      setultimodia(ultimodia);
    } else if (value == 'September') {
      var month = 8;
      fecha = new Date(2020, month + 1, 0);
      setdiaseleccionado(moment(fecha).format('DD'));

      let ultimodia = [];
      for (let i = 1; i <= moment(fecha).format('DD'); i++) {
        ultimodia.push({dia: i});
      }

      setultimodia(ultimodia);
    } else if (value == 'October') {
      var month = 9;
      fecha = new Date(2020, month + 1, 0);
      setdiaseleccionado(moment(fecha).format('DD'));

      let ultimodia = [];
      for (let i = 1; i <= moment(fecha).format('DD'); i++) {
        ultimodia.push({dia: i});
      }

      setultimodia(ultimodia);
    } else if (value == 'November') {
      var month = 10;
      fecha = new Date(2020, month + 1, 0);
      setdiaseleccionado(moment(fecha).format('DD'));

      let ultimodia = [];
      for (let i = 1; i <= moment(fecha).format('DD'); i++) {
        ultimodia.push({dia: i});
      }

      setultimodia(ultimodia);
    } else if (value == 'December') {
      var month = 11;
      fecha = new Date(2020, month + 1, 0);
      console.log('fecha', fecha);
      setdiaseleccionado(moment(fecha).format('DD'));

      let ultimodia = [];
      for (let i = 1; i <= diaseleccionado; i++) {
        ultimodia.push({dia: i});
      }
      console.log(ultimodia);
      setultimodia(ultimodia);
    }
  };

  const [selectedId, setSelectedId] = useState(parseInt(DiaActual));
  const [selectedHora, setSelectedHora] = useState(parseInt(horaeleccionado));
  const [selectedMin, setSelectedMin] = useState(parseInt(mineleccionado));

  const renderItem = ({item}) => {
    const backgroundColor = item.dia === selectedId ? 'red' : 'white';
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.dia)}
        style={{backgroundColor}}
      />
    );
  };

  const renderItemHora = ({item}) => {
    const backgroundColor = item.hora === selectedHora ? 'red' : 'white';
    return (
      <ItemHora
        item={item}
        onPress={() => setSelectedHora(item.hora)}
        style={{backgroundColor}}
      />
    );
  };

  const renderItemMin = ({item}) => {
    const backgroundColor = item.min === selectedMin ? 'red' : 'white';
    return (
      <ItemMin
        item={item}
        onPress={() => setSelectedMin(item.min)}
        style={{backgroundColor}}
      />
    );
  };

  return (
    <View style={styles.container}>
      <RNPickerSelect
        onValueChange={(value, index) => cambioMes(value)}
        items={obtenermeses}
        style={styles.picker}
        value={meseleccionado}
      />

      <FlatList
        style={{flex: 1}}
        data={ultimodia}
        horizontal
        scrollEnabled
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.dia.toString()}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
      />

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignSelf: 'center',
          marginVertical: 1,
          marginHorizontal: 40,
        }}>
        <FlatList
          data={countHoras}
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          renderItem={renderItemHora}
          keyExtractor={(item) => item.hora.toString()}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
        />
        <Text>Hour</Text>
        <FlatList
          data={countMin}
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          renderItem={renderItemMin}
          keyExtractor={(item) => item.min.toString()}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
        />
        <Text>Min</Text>
      </View>

      <View style={styles.containerInfo}>
        <Text>El mes seleccioando es: {meseleccionado2}</Text>
        <Text>El día seleccionado es: {selectedId}</Text>
        <Text>La hora seleccionada es: {selectedHora}</Text>
        <Text>El minuto seleccionado es: {selectedMin}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
  },
  item: {
    width: width / 5,
    height: height / 12,
    backgroundColor: 'black',
    color: 'black',
    margin: 20,
    borderRadius: 10,
  },

  itemHora: {
    width: width / 5,
    height: height / 12,
    backgroundColor: 'black',
    color: 'black',
    margin: 15,
    borderRadius: 10,
  },

  itemMin: {
    width: width / 5,
    height: height / 12,
    backgroundColor: 'black',
    color: 'black',
    margin: 15,
    borderRadius: 10,
  },
  picker: {
    fontSize: 35,
    color: 'black',
  },
  itemTitle: {
    flex: 1,
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
  containerInfo: {
    height: height / 3,
    width: width,
    marginHorizontal: 20,
    marginVertical: 40,
  },
});

export default Meses;
