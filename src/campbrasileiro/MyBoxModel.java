package campbrasileiro; 

import java.sql.ResultSet;
import java.util.ArrayList;

import javax.swing.ComboBoxModel;
import javax.swing.event.ListDataListener;  
  
/** 
* 
* @author Vinicius 
*/ 
public class MyBoxModel implements ComboBoxModel<Object>{
	
    ArrayList<String> data = new ArrayList<>();  
      
    String selected_item = null;  
      
    public MyBoxModel(){  
        try{  
			Conn c = new Conn(); //Pega sua conexão aqui  
			String str = "SELECT * FROM jogador"; //Esse select deve trazer apenas uma coluna para facilitar.(coluna q vai no Combobox)    
            ResultSet rs = c.st.executeQuery(str);  
              
            while(rs.next()){  
                data.add(rs.getString("nome")); //adiciona no arraylist todos os itens selecionados  
            }  
              
            try{  
                //tenta selecionar o primeiro item do array  
                  
                selected_item = data.get(0);  
            }catch(Exception ex){  
                ex.printStackTrace();  
            }  
              
        }catch(Exception e){  
            e.printStackTrace();  
              
            //trate sua exeção  
        }  
    }  
  
    public void setSelectedItem(Object anItem) {  
        selected_item = data.get(data.indexOf(anItem));  
    }  
  
    public Object getSelectedItem() {  
       return selected_item;  
    }  
  
    public int getSize() {  
        return data.size();  
    }  
  
    public Object getElementAt(int index) {  
        return data.get(index);  
    }  
  
    public void addListDataListener(ListDataListener l) {  
        //TO DO NOTHING  
    }  
  
    public void removeListDataListener(ListDataListener l) {  
        //TO DO NOTHING  
    } 
      
}  