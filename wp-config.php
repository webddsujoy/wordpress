<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'norkru' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '0:lC]6)]McKGM`nDAOJ<ro1_U/v52a_|*p#W?v5{3&s+c;w9/K^=tnVg$V3oW3I<' );
define( 'SECURE_AUTH_KEY',  'AXM<|F;%Cw>FEm_XX-iyFTZehcVR>!qZ^vL57fcJ4%vCq(D yt`/H5Je,x|6Q0^2' );
define( 'LOGGED_IN_KEY',    '4bS?4_@SHM$d92ekCXqq1|Iusgwq|gS}yUN6Tix9OOJP~pxyDxe59hX|U2/L7 ]m' );
define( 'NONCE_KEY',        '1rRr@ $>/@9P%SCRowVblbY`gkHdpMg1Zx*8FlH/T^4{kaa[hBo[ODOYpEua)Qc1' );
define( 'AUTH_SALT',        '=rJ+e&ELU<~T99B|_P[T=vHXa1=khs#5rnk6)m28mUR:6.f,(V6*mH* >isW<h{w' );
define( 'SECURE_AUTH_SALT', 'tP$|<m>Wc=8(iySm%7T(OfGi8tfnOu+K32J7Q)#jDlIlz<o]tkyo976<W,j-/fe)' );
define( 'LOGGED_IN_SALT',   '[A`oRG$2$<I/4`$K`KQyO4A/N^Yn123$z^]7~ku}L;)zu%O??K^R<3oCcJ vJLbF' );
define( 'NONCE_SALT',       'cdm72xI^HAfO&a%utecDor`~+B3qMR>x7qE8yOI+,%&(t^UuU$)}|`#dhkKPyjm2' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
