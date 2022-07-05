import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
//import { Button } from "../../components/Forms/Button";
import { categories } from "../../utils/categories";
import {
    Container,
    Header,
    Title,
    Category,
    Icon,
    Name,
    Separator,
    Footer,
} from './styles';

interface Category {
    key: string;
    name: string;
}

interface Props {
    category: Category;
    setCategory: (category: Category) => void;
    closeSelectCategory: () => void;
}

export function CategorySelect({
    category,
    setCategory,
    closeSelectCategory
}: Props) {

    function handleCategorySelect(category: Category){
        setCategory(category);
    }

    return (
        <Container>
            <Header>
                <Title>Categoria</Title>
            </Header>

            <FlatList
                data={categories}
                style={{ flex: 1, width: '100%' }}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <Category
                        onPress={() => handleCategorySelect(item)}
                        isActive={category.key === item.key}
                    >
                        <Icon name={item.icon} />
                        <Name>{item.name}</Name>
                    </Category>
                )}
                ItemSeparatorComponent={() => <Separator />}
            />

            <Footer>
                <TouchableOpacity
                style={styles.btnPNC}
                    onPress={closeSelectCategory}
                >
                    <Text 
                    style={styles.txtPNC}
                    >Selecionar</Text>
                </TouchableOpacity>
            </Footer>

        </Container>
    );
}

const styles = StyleSheet.create({
    btnPNC:{
        width: 345.6,
        backgroundColor:"#FF872C",
        padding: 21,
        borderRadius:5,
        alignItems: "center",
    },

    txtPNC:{
    fontSize: 20,
    color: "#FFFF"
    }
})
