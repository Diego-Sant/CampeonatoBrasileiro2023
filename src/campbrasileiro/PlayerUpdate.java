package campbrasileiro;

import java.awt.Choice;
import java.awt.Color;
import java.awt.Component;
import java.awt.Dimension;
import java.awt.EventQueue;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.Insets;
import java.awt.Shape;
import java.awt.Toolkit;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.geom.RoundRectangle2D;
import java.sql.ResultSet;

import javax.swing.DefaultListCellRenderer;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTextField;
import javax.swing.border.Border;
import javax.swing.border.LineBorder;
import javax.swing.border.TitledBorder;

public class PlayerUpdate extends JFrame implements ActionListener {

	private static final long serialVersionUID = 1L;
	
	JPanel jp;
	JLabel l1, l2, l3, l4, l5, l6, l7, l8, l9;
	JTextField t1, t2, t3, t4, t5, t6, t7;
	JButton b1, b2, b3, b4;
	JComboBox<String> c1, c2, c3, c4, c5, c6;
	String name;
	Choice ch;
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	PlayerUpdate() {
		super("Atualizar jogadores");
		jp = new JPanel();
		setSize(900, 500);
		jp.setLayout(null);
		this.setResizable(false);

		Dimension dim = Toolkit.getDefaultToolkit().getScreenSize();
		this.setLocation(dim.width / 2 - this.getSize().width / 2, dim.height / 2 - this.getSize().height / 2);

		jp.setBounds(0, 0, 883, 460);
		jp.setBackground(new Color(18, 18, 18));
		jp.setBorder(new TitledBorder(new LineBorder(new Color(98, 0, 238), 2), // ((r: g: b:), thickness)
				"Atualizar jogadores", TitledBorder.LEADING, TitledBorder.TOP, null, new Color(55, 0, 179)));
		add(jp);
		
		l1 = new JLabel("Coloque o nome do jogador para autocompletar");
		l1.setBounds(20, 80, 520, 30);
		l1.setFont(new Font("futura", Font.BOLD, 20));
		l1.setForeground(Color.WHITE);
		jp.add(l1);
		
		c6 = new JComboBox(new MyBoxModel());
		c6.setBounds(540, 80, 200, 30);
		c6.setBackground(new Color(28, 28, 28));
		c6.setForeground(Color.WHITE);
        jp.add(c6);
		
		b1 = new JButton("Checar");
		b1.addActionListener(this);
		b1.setBounds(750, 80, 100, 30);
		b1.setBackground(new Color(28, 28, 28));
		b1.setForeground(Color.WHITE);
		b1.setBorder(new RoundedBorder(10));
		jp.add(b1);
		b1.addActionListener(new ActionListener(){
            public void actionPerformed(ActionEvent ae){
                try{
                    
                    Conn c = new Conn();
                    String query = "SELECT * FROM jogador WHERE nome = '" + c6.getSelectedItem() + "'";
                    ResultSet rs = c.st.executeQuery(query);
                    
                    if(rs.next()){
                        t1.setText(rs.getString(1));
                        t2.setText(rs.getString(2));
                        c1.setSelectedItem(rs.getString(3));
                        c2.setSelectedItem(rs.getString(4));
                        t5.setText(rs.getString(5));
                        t6.setText(rs.getString(6));
                        c4.setSelectedItem(rs.getString(7));
                        t7.setText(rs.getString(8));
                    }
                }catch(Exception e){
                	e.printStackTrace();
                }
            }
        });
		
		// ---------------------------------------------------------------------------------
		
		l2 = new JLabel("Nome");
		l2.setBounds(60, 160, 100, 30);
		l2.setFont(new Font("futura", Font.BOLD, 20));
		l2.setForeground(Color.WHITE);
		jp.add(l2);
		
		t1 = new JTextField();
		t1.setForeground(Color.WHITE);
		t1.setBorder(new LineBorder(new Color(97, 97, 97), 1));
		t1.setCaretColor(new Color(98, 0, 238));
		t1.setBackground(new Color(28, 28, 28));
		t1.setBounds(200, 160, 180, 30);
		jp.add(t1);
		
		// ---------------------------------------------------------------------------------

		l2 = new JLabel("Idade");
		l2.setForeground(Color.BLACK);
		l2.setFont(new Font("futura", Font.BOLD, 20));
		l2.setBounds(460, 160, 200, 30);
		l2.setForeground(Color.WHITE);
		jp.add(l2);


		t2 = new JTextField();
		t2.setForeground(Color.WHITE);
		t2.setBorder(new LineBorder(new Color(97, 97, 97), 1));
		t2.setCaretColor(new Color(98, 0, 238));
		t2.setBackground(new Color(28, 28, 28));
		t2.setBounds(620, 160, 180, 30);
		jp.add(t2);

		// ---------------------------------------------------------------------------------

		l3 = new JLabel("Posição");
		l3.setForeground(Color.BLACK);
		l3.setFont(new Font("futura", Font.BOLD, 20));
		l3.setBounds(60, 210, 100, 30);
		l3.setForeground(Color.WHITE);
		jp.add(l3);

		c1 = new JComboBox<String>(new String[] { "Goleiro", "Zagueiro", "Lateral direito", "Lateral esquerdo", "Volante", "Segundo volante", "Meia atacante", "Ponta direita", "Ponta esquerda", "Segundo atacante", "Centro avante" });
		c1.setBounds(200, 210, 180, 30);
		c1.setSelectedIndex(-1);
		c1.setForeground(Color.WHITE);
		c1.setBackground(new Color(28, 28, 28));
		c1.setBorder(new LineBorder(new Color(97, 97, 97), 1));
		jp.add(c1);
		c1.setRenderer(new DefaultListCellRenderer() {
			private static final long serialVersionUID = 1L;

			@Override
			public void paint(Graphics g) {
				setBackground(new Color(28, 28, 28));
				setForeground(Color.WHITE);
				super.paint(g);
			}
		});

		// ---------------------------------------------------------------------------------

		l4 = new JLabel("Time");
		l4.setForeground(Color.BLACK);
		l4.setFont(new Font("futura", Font.BOLD, 20));
		l4.setBounds(460, 210, 200, 30);
		l4.setForeground(Color.WHITE);
		jp.add(l4);

		c2 = new JComboBox<String>(new String[] { "América Mineiro", "Athletico Paranaense", "Atlético Mineiro", "Bahia", "Botafogo", "Red Bull Bragantino", "Corinthians", "Coritiba", "Cruzeiro", "Cuiabá", "Flamengo", "Fluminense", "Fortaleza", "Goiás", "Grêmio", "Internacional", "Palmeiras", "Santos", "São Paulo", "Vasco", "Nenhum" });
		c2.setBounds(620, 210, 180, 30);
		c2.setSelectedIndex(-1);
		c2.setForeground(Color.WHITE);
		c2.setBackground(new Color(28, 28, 28));
		c2.setBorder(new LineBorder(new Color(97, 97, 97), 1));
		jp.add(c2);
		c2.setRenderer(new DefaultListCellRenderer() {
			private static final long serialVersionUID = 1L;

			@Override
			public void paint(Graphics g) {
				setBackground(new Color(28, 28, 28));
				setForeground(Color.WHITE);
				super.paint(g);
			}
		});

		// ---------------------------------------------------------------------------------

		l5 = new JLabel("Assistências");
		l5.setForeground(Color.BLACK);
		l5.setFont(new Font("futura", Font.BOLD, 20));
		l5.setBounds(60, 260, 150, 30);
		l5.setForeground(Color.WHITE);
		jp.add(l5);


		t5 = new JTextField();
		t5.setForeground(Color.WHITE);
		t5.setBorder(new LineBorder(new Color(97, 97, 97), 1));
		t5.setCaretColor(new Color(98, 0, 238));
		t5.setBackground(new Color(28, 28, 28));
		t5.setBounds(200, 260, 180, 30);
		jp.add(t5);

		// ---------------------------------------------------------------------------------

		l6 = new JLabel("Gols");
		l6.setForeground(Color.BLACK);
		l6.setFont(new Font("futura", Font.BOLD, 20));
		l6.setBounds(460, 260, 200, 30);
		l6.setForeground(Color.WHITE);
		jp.add(l6);

		t6 = new JTextField();
		t6.setForeground(Color.WHITE);
		t6.setBorder(new LineBorder(new Color(97, 97, 97), 1));
		t6.setCaretColor(new Color(98, 0, 238));
		t6.setBackground(new Color(28, 28, 28));
		t6.setBounds(620, 260, 180, 30);
		jp.add(t6);

		// ---------------------------------------------------------------------------------
		
		l7 = new JLabel("País");
		l7.setForeground(Color.BLACK);
		l7.setFont(new Font("futura", Font.BOLD, 20));
		l7.setBounds(60, 310, 200, 30);
		l7.setForeground(Color.WHITE);
		jp.add(l7);

		c4 = new JComboBox<String>(new String[] { "Brasil", "Argentina", "Bolívia", "Chile", "Colômbia", "Equador", "Espanha", "Estados Unidos", "México", "Paraguai", "Peru", "Portugal", "Uruguai", "Venezuela" });
		c4.setBounds(200, 310, 180, 30);
		c4.setForeground(Color.WHITE);
		c4.setBackground(new Color(28, 28, 28));
		c4.setBorder(new LineBorder(new Color(97, 97, 97), 1));
		jp.add(c4);
		c4.setRenderer(new DefaultListCellRenderer() {
			private static final long serialVersionUID = 1L;

			@Override
			public void paint(Graphics g) {
				setBackground(new Color(28, 28, 28));
				setForeground(Color.WHITE);
				super.paint(g);
			}
		});
		
		// ---------------------------------------------------------------------------------

		l8 = new JLabel("N° camisa");
		l8.setForeground(Color.BLACK);
		l8.setFont(new Font("futura", Font.BOLD, 20));
		l8.setBounds(460, 310, 200, 30);
		l8.setForeground(Color.WHITE);
		jp.add(l8);

		t7 = new JTextField();
		t7.setForeground(Color.WHITE);
		t7.setBorder(new LineBorder(new Color(97, 97, 97), 1));
		t7.setCaretColor(new Color(98, 0, 238));
		t7.setBackground(new Color(28, 28, 28));
		t7.setBounds(620, 310, 180, 30);
		jp.add(t7);
		
		// ---------------------------------------------------------------------------------
		
		b3 = new JButton("Atualizar");
		b3.addActionListener(this);
		b3.setBounds(460, 380, 150, 40);
		b3.setBackground(new Color(28, 28, 28));
		b3.setForeground(Color.WHITE);
		b3.setBorder(new RoundedBorder(10));
		jp.add(b3);

		b2 = new JButton("Voltar");
		b2.addActionListener(this);
		b2.setBounds(260, 380, 150, 40);
		b2.setBackground(new Color(28, 28, 28));
		b2.setForeground(Color.WHITE);
		b2.setBorder(new RoundedBorder(10));
		jp.add(b2);
	}
	
	public class RoundJTextField extends JTextField {

		private static final long serialVersionUID = 1L;

		private Shape shape;

		public RoundJTextField(int size) {
			super(size);
			setOpaque(false);
		}

		protected void paintComponent(Graphics g) {
			g.setColor(getBackground());
			g.fillRoundRect(0, 0, getWidth() - 1, getHeight() - 1, 15, 15);
			super.paintComponent(g);
		}

		protected void paintBorder(Graphics g) {
			g.setColor(new Color(97, 97, 97));
			g.drawRoundRect(0, 0, getWidth() - 1, getHeight() - 1, 15, 15);
		}

		public boolean contains(int x, int y) {
			if (shape == null || !shape.getBounds().equals(getBounds())) {
				shape = new RoundRectangle2D.Float(0, 0, getWidth() - 1, getHeight() - 1, 15, 15);
			}
			return shape.contains(x, y);
		}
	}

	// ---------------------------------------------------------------------------------

	private static class RoundedBorder implements Border {

		private int radius;

		RoundedBorder(int radius) {
			this.radius = radius;
		}

		public Insets getBorderInsets(Component c) {
			return new Insets(this.radius + 1, this.radius + 1, this.radius + 2, this.radius);
		}

		public boolean isBorderOpaque() {
			return true;
		}

		public void paintBorder(Component c, Graphics g, int x, int y, int width, int height) {
			g.setColor(new Color(97, 97, 97));
			g.drawRoundRect(x, y, width - 1, height - 1, radius, radius);
		}
	}

	@Override
	public void actionPerformed(ActionEvent actionEvent) {
		try {
			if (actionEvent.getSource() == b3) {
				try {
					Conn c = new Conn();
					String query = "UPDATE jogador SET nome='" + t1.getText() 
						+ "',  idade='" + t2.getText() + "', posicao='" 
						+ (String) c1.getSelectedItem() + "', time='" 
						+ (String) c2.getSelectedItem() + "', assist='" 
						+ t5.getText() + "', gols='" + t6.getText() + "', pais='" 
						+ (String) c4.getSelectedItem() + "', numcamisa='" 
						+ t7.getText() + "' WHERE nome='" + (String) c6.getSelectedItem() + "'";
					
					c.st.executeUpdate(query);
					JOptionPane.showMessageDialog(null, "Informações do jogador atualizado com sucesso!");
					setVisible(false);
					new PlayerUpdate().setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			} else if (actionEvent.getSource() == b2) {
				setVisible(false);
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					PlayerUpdate frame = new PlayerUpdate();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}
}
