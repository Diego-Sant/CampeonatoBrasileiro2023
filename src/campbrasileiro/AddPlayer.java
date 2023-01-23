package campbrasileiro;

import java.awt.Color;
import java.awt.Component;
import java.awt.Dimension;
import java.awt.EventQueue;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.Insets;
import java.awt.Toolkit;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

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
import javax.swing.plaf.metal.MetalLookAndFeel;

public class AddPlayer extends JFrame implements ActionListener {

	private static final long serialVersionUID = 1L;

	JPanel jp;
	JLabel l1, l2, l3, l4, l5, l6, l7, l8, l13;
	JTextField t1, t2, t3, t4, t5, t6, t7;
	JButton b1, b2;
	JComboBox<String> c1, c2, c4;

	AddPlayer() {
		super("Adicionar jogador");
		jp = new JPanel();
		setSize(900, 500);
		jp.setLayout(null);
		this.setResizable(false);

		Dimension dim = Toolkit.getDefaultToolkit().getScreenSize();
		this.setLocation(dim.width / 2 - this.getSize().width / 2, dim.height / 2 - this.getSize().height / 2);

		jp.setBounds(0, 0, 883, 460);
		jp.setBackground(new Color(18, 18, 18));
		jp.setBorder(new TitledBorder(new LineBorder(new Color(98, 0, 238), 2), // ((r: g: b:), thickness)
				"Adicionar jogador", TitledBorder.LEADING, TitledBorder.TOP, null, new Color(55, 0, 179)));
		add(jp);
		
		MetalLookAndFeel.setCurrentTheme(new javax.swing.plaf.metal.OceanTheme() {
			@Override
			protected javax.swing.plaf.ColorUIResource getSecondary2() {
				return new javax.swing.plaf.ColorUIResource(new Color(28, 28, 28));
			}
		});

		// ---------------------------------------------------------------------------------

		l13 = new JLabel("Adicionar jogador");
		l13.setForeground(Color.BLACK);
		l13.setFont(new Font("futura", Font.BOLD, 20));
		l13.setBounds(335, 54, 240, 30);
		l13.setForeground(Color.WHITE);
		jp.add(l13);
		
		l1 = new JLabel("Nome");
		l1.setForeground(Color.BLACK);
		l1.setFont(new Font("futura", Font.BOLD, 20));
		l1.setBounds(60, 120, 100, 30);
		l1.setForeground(Color.WHITE);
		jp.add(l1);

		t1 = new JTextField();
		t1.setForeground(Color.WHITE);
		t1.setBackground(new Color(28, 28, 28));
		t1.setBounds(200, 120, 180, 30);
		t1.setBorder(new LineBorder(new Color(97, 97, 97), 1));
		t1.setCaretColor(new Color(98, 0, 238));
		jp.add(t1);

		// ---------------------------------------------------------------------------------

		l2 = new JLabel("Idade");
		l2.setForeground(Color.BLACK);
		l2.setFont(new Font("futura", Font.BOLD, 20));
		l2.setBounds(460, 120, 200, 30);
		l2.setForeground(Color.WHITE);
		jp.add(l2);


		t2 = new JTextField();
		t2.setForeground(Color.WHITE);
		t2.setBorder(new LineBorder(new Color(97, 97, 97), 1));
		t2.setCaretColor(new Color(98, 0, 238));
		t2.setBackground(new Color(28, 28, 28));
		t2.setBounds(620, 120, 180, 30);
		jp.add(t2);

		// ---------------------------------------------------------------------------------

		l3 = new JLabel("Posição");
		l3.setForeground(Color.BLACK);
		l3.setFont(new Font("futura", Font.BOLD, 20));
		l3.setBounds(60, 170, 100, 30);
		l3.setForeground(Color.WHITE);
		jp.add(l3);

		c1 = new JComboBox<String>(new String[] { "Goleiro", "Zagueiro", "Lateral direito", "Lateral esquerdo", "Volante", "Segundo volante", "Meia atacante", "Ponta direita", "Ponta esquerda", "Segundo atacante", "Centro avante" });
		c1.setBounds(200, 170, 180, 30);
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
		l4.setBounds(460, 170, 200, 30);
		l4.setForeground(Color.WHITE);
		jp.add(l4);

		c2 = new JComboBox<String>(new String[] { "América Mineiro", "Athletico Paranaense", "Atlético Mineiro", "Bahia", "Botafogo", "Corinthians", "Coritiba", "Cruzeiro", "Cuiabá", "Flamengo", "Fluminense", "Fortaleza", "Goiás", "Grêmio", "Internacional", "Palmeiras", "Red Bull Bragantino", "Santos", "São Paulo", "Vasco", "Nenhum" });
		c2.setBounds(620, 170, 180, 30);
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
		l5.setBounds(60, 220, 150, 30);
		l5.setForeground(Color.WHITE);
		jp.add(l5);


		t5 = new JTextField();
		t5.setForeground(Color.WHITE);
		t5.setBorder(new LineBorder(new Color(97, 97, 97), 1));
		t5.setCaretColor(new Color(98, 0, 238));
		t5.setBackground(new Color(28, 28, 28));
		t5.setBounds(200, 220, 180, 30);
		jp.add(t5);

		// ---------------------------------------------------------------------------------

		l6 = new JLabel("Gols");
		l6.setForeground(Color.BLACK);
		l6.setFont(new Font("futura", Font.BOLD, 20));
		l6.setBounds(460, 220, 200, 30);
		l6.setForeground(Color.WHITE);
		jp.add(l6);

		t6 = new JTextField();
		t6.setForeground(Color.WHITE);
		t6.setBorder(new LineBorder(new Color(97, 97, 97), 1));
		t6.setCaretColor(new Color(98, 0, 238));
		t6.setBackground(new Color(28, 28, 28));
		t6.setBounds(620, 220, 180, 30);
		jp.add(t6);

		// ---------------------------------------------------------------------------------
		
		l7 = new JLabel("País");
		l7.setForeground(Color.BLACK);
		l7.setFont(new Font("futura", Font.BOLD, 20));
		l7.setBounds(60, 270, 200, 30);
		l7.setForeground(Color.WHITE);
		jp.add(l7);

		c4 = new JComboBox<String>(new String[] { "Brasil", "Argentina", "Bolívia", "Chile", "China", "Colômbia", "Equador", "Espanha", "Estados Unidos", "México", "Paraguai", "Peru", "Portugal", "Uruguai", "Venezuela" });
		c4.setBounds(200, 270, 180, 30);
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
		l8.setBounds(460, 270, 200, 30);
		l8.setForeground(Color.WHITE);
		jp.add(l8);

		t7 = new JTextField();
		t7.setForeground(Color.WHITE);
		t7.setBorder(new LineBorder(new Color(97, 97, 97), 1));
		t7.setCaretColor(new Color(98, 0, 238));
		t7.setBackground(new Color(28, 28, 28));
		t7.setBounds(620, 270, 180, 30);
		jp.add(t7);
		
		// ---------------------------------------------------------------------------------

		b1 = new JButton("Adicionar");
		b1.addActionListener(this);
		b1.setBounds(460, 380, 150, 40);
		b1.setBackground(new Color(28, 28, 28));
		b1.setForeground(Color.WHITE);
		b1.setBorder(new RoundedBorder(10));
		jp.add(b1);

		b2 = new JButton("Voltar");
		b2.addActionListener(this);
		b2.setBounds(260, 380, 150, 40);
		b2.setBackground(new Color(28, 28, 28));
		b2.setForeground(Color.WHITE);
		b2.setBorder(new RoundedBorder(10));
		jp.add(b2);

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

	// ---------------------------------------------------------------------------------

	@Override
	public void actionPerformed(ActionEvent actionEvent) {
		try {
			if (actionEvent.getSource() == b1) {
				try {
					String nome = t1.getText();
					String idade = t2.getText();
					String posicao = (String) c1.getSelectedItem();
					String time = (String) c2.getSelectedItem();
					String assist = t5.getText();
					String gols = t6.getText();
					String pais = (String) c4.getSelectedItem();
					String numcamisa = t7.getText();
					
					Conn c = new Conn();
					String query = "INSERT INTO jogador VALUES('" + nome + "', '" 
						+ idade + "', '" + posicao + "', '" + time + "', '" 
						+ assist + "', '" + gols + "', '" + pais + "', '" + numcamisa + "')";
					
					c.st.executeUpdate(query);
					JOptionPane.showMessageDialog(null, "Jogador adicionado com sucesso!");
					setVisible(false);
					new AddPlayer().setVisible(true);
					
				}
				catch (Exception e) {
					e.printStackTrace();
				}
			} else if (actionEvent.getSource() == b2) {
				setVisible(false);
			}
			
		}
		catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					AddPlayer frame = new AddPlayer();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}
}
