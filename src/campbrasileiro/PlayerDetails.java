package campbrasileiro;

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
import java.awt.event.FocusEvent;
import java.awt.event.FocusListener;
import java.awt.geom.RoundRectangle2D;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.RowSorter;
import javax.swing.SortOrder;
import javax.swing.border.Border;
import javax.swing.border.LineBorder;
import javax.swing.border.TitledBorder;
import javax.swing.plaf.basic.BasicScrollBarUI;
import javax.swing.table.TableModel;
import javax.swing.table.TableRowSorter;

public class PlayerDetails extends JFrame implements ActionListener {

	private static final long serialVersionUID = 1L;

	JLabel l1, l2, l3;
	JTable tb;
	JButton b1, b2, b3, b4, b5;
	JTextField tf, tf1;
	JPanel jp;
	String x[] = { "Nome", "Idade", "Posição", "Time", "Assistências", "Gols", "País", "N° Camisa" };
	String y[][] = new String[200][8];

	int i = 0, j = 0;

	PlayerDetails() {
		super("Detalhes dos jogadores");
		jp = new JPanel();
		setSize(1260, 700);
		jp.setLayout(null);
		this.setResizable(false);

		Dimension dim = Toolkit.getDefaultToolkit().getScreenSize();
		this.setLocation(dim.width / 2 - this.getSize().width / 2, dim.height / 2 - this.getSize().height / 2);

		jp.setBounds(0, 0, 1243, 660);
		jp.setBackground(new Color(18, 18, 18));
		jp.setBorder(new TitledBorder(new LineBorder(new Color(98, 0, 238), 2), // ((r: g: b:), thickness)
				"Detalhes dos jogadores", TitledBorder.LEADING, TitledBorder.TOP, null, new Color(55, 0, 179)));
		add(jp);

		l1 = new JLabel("Coloque o nome exato do jogador");
		l1.setBounds(20, 358, 450, 30);
		l1.setFont(new Font("futura", Font.BOLD, 20));
		l1.setForeground(Color.WHITE);
		jp.add(l1);

		tf = new RoundJTextField(15);
		tf.setBounds(350, 358, 200, 30);
		tf.setBackground(new Color(28, 28, 28));
		tf.setText("Nome do jogador");
		tf.setForeground(Color.GRAY);
		tf.setCaretColor(new Color(98, 0, 238));
		jp.add(tf);
		tf.addFocusListener(new FocusListener() {
			@Override
			public void focusGained(FocusEvent e) {
				if (tf.getText().equals("Nome do jogador")) {
					tf.setText("");
					tf.setForeground(Color.WHITE);
				}
			}

			@Override
			public void focusLost(FocusEvent e) {
				if (tf.getText().isEmpty()) {
					tf.setForeground(Color.GRAY);
					tf.setText("Nome do jogador");
				}
			}
		});

		b1 = new JButton("Deletar");
		b1.addActionListener(this);
		b1.setBounds(570, 358, 100, 30);
		b1.setBackground(new Color(28, 28, 28));
		b1.setForeground(Color.WHITE);
		b1.setBorder(new RoundedBorder(10));
		jp.add(b1);

		l2 = new JLabel("Adicionar jogadores");
		l2.setBounds(50, 458, 400, 30);
		l2.setFont(new Font("futura", Font.BOLD, 20));
		l2.setForeground(Color.WHITE);
		jp.add(l2);

		b4 = new JButton("Adicionar");
		b4.addActionListener(this);
		b4.setBounds(350, 458, 100, 30);
		b4.setBackground(new Color(28, 28, 28));
		b4.setForeground(Color.WHITE);
		b4.setBorder(new RoundedBorder(10));
		jp.add(b4);

		l3 = new JLabel("Atualizar jogadores");
		l3.setBounds(50, 518, 400, 30);
		l3.setFont(new Font("futura", Font.BOLD, 20));
		l3.setForeground(Color.WHITE);
		jp.add(l3);

		b2 = new JButton("Atualizar");
		b2.addActionListener(this);
		b2.setBounds(350, 518, 100, 30);
		b2.setBackground(new Color(28, 28, 28));
		b2.setForeground(Color.WHITE);
		b2.setBorder(new RoundedBorder(10));
		jp.add(b2);

		b3 = new JButton("Voltar");
		b3.addActionListener(this);
		b3.setBounds(50, 590, 100, 30);
		b3.setBackground(new Color(28, 28, 28));
		b3.setForeground(Color.WHITE);
		b3.setBorder(new RoundedBorder(10));
		jp.add(b3);
		
		b5 = new JButton("Atualizar a lista");
		b5.addActionListener(this);
		b5.setBounds(970, 358, 250, 30);
		b5.setBackground(new Color(28, 28, 28));
		b5.setForeground(Color.WHITE);
		b5.setBorder(new RoundedBorder(10));
		jp.add(b5);

		try {
			Conn c = new Conn();
			String query = "SELECT * FROM jogador";
			ResultSet rs = c.st.executeQuery(query);

			while (rs.next()) {
				y[i][j++] = rs.getString("nome");
				y[i][j++] = rs.getString("idade");
				y[i][j++] = rs.getString("posicao");
				y[i][j++] = rs.getString("time");
				y[i][j++] = rs.getString("assist");
				y[i][j++] = rs.getString("gols");
				y[i][j++] = rs.getString("pais");
				y[i][j++] = rs.getString("numcamisa");
				i++;
				j = 0;
			}
			tb = new JTable(y, x);
			tb.setBackground(new Color(28, 28, 28));
			tb.setForeground(Color.WHITE);
			TableRowSorter<TableModel> sorter = new TableRowSorter<TableModel>(tb.getModel());
			tb.setRowSorter(sorter);

			List<RowSorter.SortKey> sortKeys = new ArrayList<>(100);
			sortKeys.add(new RowSorter.SortKey(5, SortOrder.DESCENDING));
			sortKeys.add(new RowSorter.SortKey(4, SortOrder.DESCENDING));
			sortKeys.add(new RowSorter.SortKey(0, SortOrder.ASCENDING));
			sorter.setSortKeys(sortKeys);
		} catch (Exception e) {
			e.printStackTrace();
		}

		JScrollPane sp = new JScrollPane(tb);
		sp.setBounds(20, 20, 1200, 330);
		sp.setBackground(new Color(28, 28, 28));
		sp.getVerticalScrollBar().setBackground(new Color(28, 28, 28));
		jp.add(sp);
		sp.getVerticalScrollBar().setUI(new BasicScrollBarUI() {
			@Override
			protected void configureScrollBarColors() {
				this.thumbColor = new Color(98, 0, 238);
			}
		});
	}

	@Override
	public void actionPerformed(ActionEvent actionEvent) {
		try {
			if (actionEvent.getSource() == b1) {
				try {
					Conn c = new Conn();
					String time = tf.getText();
					String query = "DELETE FROM jogador WHERE nome = '" + time + "'";

					c.st.executeUpdate(query);
					setVisible(false);
					new PlayerDetails().setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			} else if (actionEvent.getSource() == b4) {
				new AddPlayer().setVisible(true);
			} else if (actionEvent.getSource() == b2) {
				new PlayerUpdate().setVisible(true);
			} else if (actionEvent.getSource() == b3) {
				setVisible(false);
			} else if (actionEvent.getSource() == b5) {
				setVisible(false);
				new PlayerDetails().setVisible(true);
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	// ---------------------------------------------------------------------------------

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

	// ---------------------------------------------------------------------------------

	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					PlayerDetails frame = new PlayerDetails();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}
}
